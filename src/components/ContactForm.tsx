import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "../lib/schema";
import { countryCodes } from "../constants/countryCodes";

import FormInput from "./form/FormInput";
import FormSelect from "./form/FormSelect";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      code: "",
      country: "",
      experience: "",
      terms: false,
    },
  });

  const country = watch("country");

  const onSubmit = () => {
    setTimeout(() => {
      toast.success("Form submitted successfully!");
    }, 100);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      code: "",
      country: "",
      experience: "",
      terms: false,
    });
  };

  useEffect(() => {
    const selected = countryCodes.find((c) => c.value === country);
    if (selected?.code) {
      setValue("code", selected.code);
    }
  }, [country, setValue]);

  return (
    <>
      <Toaster position="top-right" richColors />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-2xl mx-auto bg-white rounded-lg px-6 sm:px-8 py-10"
      >
        <p className="text-black open-sans text-xl font-bold text-center sm:text-left">
          Lorem ipsum dolor sit amet
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            type="text"
            placeholder="First Name"
            register={register("firstName")}
            error={errors.firstName}
          />
          <FormInput
            type="text"
            placeholder="Last Name"
            register={register("lastName")}
            error={errors.lastName}
          />

          <FormSelect
            placeholder="Country"
            value={country}
            onChange={(value) => setValue("country", value)}
            options={countryCodes}
            error={errors.country}
          />

          <div className="grid grid-cols-4 gap-2">
            <FormInput
              type="text"
              placeholder="Code"
              register={register("code")}
              readOnly={true}
            />
            <div className="col-span-3">
              <FormInput
                type="text"
                placeholder="Phone"
                register={register("phone")}
                error={errors.phone}
              />
            </div>
          </div>

          <FormInput
            type="email"
            placeholder="Email"
            register={register("email")}
            error={errors.email}
          />
          <FormSelect
            placeholder="Experience"
            value={watch("experience")}
            onChange={(value) => setValue("experience", value)}
            options={[
              { value: "beginner", label: "Beginner" },
              { value: "pro", label: "Pro" },
            ]}
            error={errors.experience}
          />
        </div>

        <div className="space-y-2">
          <Controller
            name="terms"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <Label htmlFor="terms" className="text-sm text-[#999999]">
                  I have read and accepted the{" "}
                  <a
                    href="/privacy"
                    className="text-red-600 hover:text-red-800"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-red-600 hover:text-red-800">
                    Terms and Conditions
                  </a>
                </Label>
              </div>
            )}
          />
          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms.message}</p>
          )}
        </div>

        <div className="text-center">
          <Button
            type="submit"
            className="mt-6 w-full sm:w-[45%] bg-[#179149] h-[40px] md:h-[54px] hover:bg-green-400 text-xl"
          >
            JOIN NOW
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
