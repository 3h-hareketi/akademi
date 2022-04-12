import { redirect } from "next-runtime";
import { getSdk } from "../interfaces/fauna";
import { Curriculum, CurriculumBySlugQuery } from "../interfaces/graphcms";
import { client } from "./faunaGraphQlClient";

type Props = {
  userId: string;
  curriculum?: CurriculumBySlugQuery["curriculum"];
};

const checkIfUserHasResultOrSubmit = async ({ userId, curriculum }: Props) => {
  const sdk = getSdk(client);
  const { findUserByID: user } = await sdk.ResultsAndSubmissionsByUserId({
    id: userId,
  });

  for (const result of user?.results?.data || []) {
    if (result?.curriculumName === curriculum?.title) {
      return redirect(`/api/certificate?id=${result?._id}`, 302);
    }
  }

  for (const submission of user?.submissions?.data || []) {
    if (submission?.curriculumName === curriculum?.title) {
      return redirect(
        `/egitimler/${curriculum?.category?.slug}/${curriculum?.slug}/dogrulama-bekliyor`,
        302
      );
    }
  }
};

export default checkIfUserHasResultOrSubmit;
