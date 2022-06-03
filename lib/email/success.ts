import { Result } from "../../interfaces/fauna";

type Props = {
  result: Result;
  url: string;
  curriculumName: string;
};

export function html({ result, url, curriculumName }: Props): string {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail, as this is confusing because it seems
  // like they are supposed to click on their email address to sign in.
  const escapedEmail = `${result.user.email.replace(/\./g, "&#8203;.")}`;

  return `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>Tebrikler</title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }

  </style>
  <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
  <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }
    }

  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }

    .moz-text-html .mj-column-per-50 {
      width: 50% !important;
      max-width: 50%;
    }

  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }

  </style>
  <style type="text/css">
  </style>
</head>

<body style="word-spacing:normal;background-color:#E7E7E7;">
  <div style="background-color:#E7E7E7;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#E7E7E7;background-color:#E7E7E7;width:100%;">
      <tbody>
        <tr>
          <td>
            <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#E7E7E7" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                  <tr>
                    <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;text-align:center;">
                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:180px;">
                                        <a href="https://google.com" target="_blank">
                                          <img alt height="auto" src="https://akademi.3hhareketi.org/_next/image?url=%2F3h-logo.png&w=256&q=75" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="180">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="body-section-outlook" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="body-section" style="-webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); margin: 0px auto; max-width: 600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;padding-top:15px;text-align:center;">
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:570px;" ><![endif]-->
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:24px;text-align:left;color:#212b35;">Tebrikler! ${escapedEmail},</div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;">Merhaba</div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;">${curriculumName} sınavını başarıyla tamamladığınız için sertifika almaya hak kazandınız.</div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;">Bu başarınız için sizi tebrik ederiz. Diğer eğitimlerimizde görüşmek dileğiyle.</div>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:300px;line-height:100%;">
                                    <tbody>
                                      <tr>
                                        <td align="center" bgcolor="#12acbc" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#12acbc;" valign="middle">
                                          <a href="${url}" style="display:inline-block;width:250px;background:#12acbc;color:#ffffff;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:17px;font-weight:bold;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> Sertifikanızı Görüntüleyin </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;padding-top:0;text-align:center;">
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:570px;" ><![endif]-->
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody>
                              <tr>
                                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <p style="border-top:solid 1px #DFE3E8;font-size:1px;margin:0px auto;width:100%;">
                                  </p>
                                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #DFE3E8;font-size:1px;margin:0px auto;width:520px;" role="presentation" width="520px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0 15px 0 15px;text-align:center;">
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:570px;" ><![endif]-->
                        <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:24px;text-align:left;color:#212b35;">Bize ulaşın!</div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;">Herhangi bir sorunuz hakkında info@3hhareketi.org adresimizden bize ulaşabilirsiniz.</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
              <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;text-align:center;">
                        <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:285px;" ><![endif]-->
                        <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:24px;text-align:left;text-transform:uppercase;color:#212b35;">Adres</div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#637381;">Hürriyet Hukuk Hoşgörü Hareketi Derneği <mj-text color="#637381" font-size="14px" padding-top="0"> Emirgan Sokak <br> Sarıyer, İstanbul - 34467</mj-text>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:285px;" ><![endif]-->
                        <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:24px;text-align:left;text-transform:uppercase;color:#212b35;">3H Hareketi</div>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0;word-break:break-word;">
                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#637381;">Hürriyet Hukuk Hoşgörü Hareketi Derneği <br></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
      <tbody>
        <tr>
          <td>
            <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="margin:0px auto;max-width:600px;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                  <tr>
                    <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                      <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="vertical-align:top;padding:0;">
                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                            <tbody>
                                              <tr>
                                                <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                  <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                    <tbody>
                                                      <tr>
                                                        <td style="padding:4px;vertical-align:middle;">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#A1A0A0;border-radius:3px;width:30px;">
                                                            <tbody>
                                                              <tr>
                                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/3hhareketi/" target="_blank">
                                                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="border-radius:3px;display:block;" width="30">
                                                                  </a>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <!--[if mso | IE]></td><td><![endif]-->
                                                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                    <tbody>
                                                      <tr>
                                                        <td style="padding:4px;vertical-align:middle;">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#A1A0A0;border-radius:3px;width:30px;">
                                                            <tbody>
                                                              <tr>
                                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                                  <a href="https://www.youtube.com/channel/UCpNJRC7fCGASPkltHxGJesQ" target="_blank">
                                                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/youtube.png" style="border-radius:3px;display:block;" width="30">
                                                                  </a>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <!--[if mso | IE]></td><td><![endif]-->
                                                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                    <tbody>
                                                      <tr>
                                                        <td style="padding:4px;vertical-align:middle;">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#A1A0A0;border-radius:3px;width:30px;">
                                                            <tbody>
                                                              <tr>
                                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                                  <a href="https://twitter.com/intent/tweet?url=https://twitter.com/3hhareketi" target="_blank">
                                                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" style="border-radius:3px;display:block;" width="30">
                                                                  </a>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <!--[if mso | IE]></td><td><![endif]-->
                                                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                    <tbody>
                                                      <tr>
                                                        <td style="padding:4px;vertical-align:middle;">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#A1A0A0;border-radius:3px;width:30px;">
                                                            <tbody>
                                                              <tr>
                                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                                  <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.linkedin.com/company/the-3h-movement/&title=&summary=&source=" target="_blank">
                                                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png" style="border-radius:3px;display:block;" width="30">
                                                                  </a>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <!--[if mso | IE]></td><td><![endif]-->
                                                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                    <tbody>
                                                      <tr>
                                                        <td style="padding:4px;vertical-align:middle;">
                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#A1A0A0;border-radius:3px;width:30px;">
                                                            <tbody>
                                                              <tr>
                                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                                  <a href="https://www.instagram.com/3hhareketi/" target="_blank">
                                                                    <img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" style="border-radius:3px;display:block;" width="30">
                                                                  </a>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#445566;">Bu e-posta 3H Akademi üyeliğiniz sebebiyle size ulaştı.</div>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                  <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#445566;">&copy; 2022 Tüm hakları saklıdır</div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                      <div style="margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                          <tbody>
                            <tr>
                              <td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:0;text-align:center;">
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:600px;" ><![endif]-->
                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                                  <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:top;width:600px;" ><![endif]-->
                                  <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                      <tbody>
                                        <tr>
                                          <td style="vertical-align:top;padding-right:0;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                    <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:bold;line-height:16px;text-align:center;color:#445566;">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<a class="footer-link" href="https://www.google.com" style="color: #888888;">Abonelikten çık</a></div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if mso | IE]></td></tr></table><![endif]-->
                                </div>
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>

</html>
  
`;
}

export function text({ id }: Record<"id", string>) {
  return `Sertifikanızı görüntülemek için tıklayın; https://akademi.3hhareketi.org/api/certificate?id=${id}\n\n`;
}
