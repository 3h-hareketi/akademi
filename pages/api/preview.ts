import { NextApiRequest, NextApiResponse } from "next";
import { getSdk, Stage } from "../../interfaces/graphcms";
import { client } from "../../lib/graphCmsClient";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    request.query.secret !== process.env.GRAPHCMS_PREVIEW_SECRET ||
    !request.query.slug
  ) {
    return response.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const sdk = getSdk(client);
  const { curriculum } = await sdk.CurriculumBySlug({
    slug: request.query.slug as string,
  });

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!curriculum) {
    return response.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  response.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  response.writeHead(307, {
    Location: `/egitimler/${curriculum.category?.slug}/${curriculum.slug}`,
  });
  response.end();
}
