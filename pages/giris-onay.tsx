import { MailIcon } from "@heroicons/react/solid";
const VerifyRequest = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="flex flex-row justify-center mx-10">
        <div className="flex flex-col py-20">
          <p className="py-3 mx-auto text-xl">E-postanızı kontrol edin.</p>

          <MailIcon
            className="mx-auto text-primary-500"
            width={270}
            height={300}
          />
          <p className="mx-auto text-xl">
            <h3 className="flex text-center text-primary-700">
              Oturum açma bağlantısı e-posta adresinize gönderildi.{" "}
            </h3>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyRequest;
