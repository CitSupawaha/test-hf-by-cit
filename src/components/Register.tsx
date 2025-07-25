import bgImage from "../assets/image/main_bg.png";
import ContactForm from "../components/ContactForm";

const Register = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white h-full px-4 sm:px-6 lg:px-12 flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto w-full max-w-4xl py-12 sm:py-20 text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient">
          LOREM IPSUM DOLOR
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10">
          SIT AMET TOSIK
        </h2>

        <div className="px-2 sm:px-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Register;
