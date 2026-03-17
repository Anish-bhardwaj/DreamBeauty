"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  countryCode: yup.string(),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(7, "Please enter a valid phone number"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

function ContactForm({ heading }) {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: "1",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const { countryCode, phone, ...rest } = data;
    console.log("Contact Form Submitted:", {
      ...rest,
      countryCode: `+${countryCode}`,
      phone: phone.slice(countryCode.length),
    });
    reset();
  };

  return (
    <div className="contact-form-wrapper">
      <h2 className="contact-form-title">{heading}</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="contact-form-group">
          <label className="contact-form-label">Full Name</label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter Full Name"
                className={`contact-form-input ${errors.fullName ? "contact-form-input-error" : ""}`}
              />
            )}
          />
          {errors.fullName && (
            <span className="contact-form-error">{errors.fullName.message}</span>
          )}
        </div>

        <div className="contact-form-row">
          <div className="contact-form-group">
            <label className="contact-form-label">Email Id</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Enter Email"
                  className={`contact-form-input ${errors.email ? "contact-form-input-error" : ""}`}
                />
              )}
            />
            {errors.email && (
              <span className="contact-form-error">{errors.email.message}</span>
            )}
          </div>

          <div className="contact-form-group">
            <label className="contact-form-label">Phone Number</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  country="us"
                  value={field.value}
                  onChange={(value, countryData) => {
                    field.onChange(value);
                    setValue("countryCode", countryData.dialCode);
                  }}
                  enableSearch
                  disableSearchIcon
                  searchPlaceholder="Search country..."
                  disableCountryCode={false}
                  inputProps={{ title: "" }}
                  inputClass="contact-phone-input"
                  containerClass={`contact-phone-container ${errors.phone ? "phone-error" : ""}`}
                  buttonClass="contact-phone-btn"
                  dropdownClass="contact-phone-dropdown"
                  searchClass="contact-phone-search"
                  placeholder="Enter Phone number"
                />
              )}
            />
            {errors.phone && (
              <span className="contact-form-error">{errors.phone.message}</span>
            )}
          </div>
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label">Message</label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="How can we help you?"
                rows={5}
                className={`contact-form-input contact-form-textarea ${errors.message ? "contact-form-input-error" : ""}`}
              />
            )}
          />
          {errors.message && (
            <span className="contact-form-error">{errors.message.message}</span>
          )}
        </div>

        <button type="submit" className="contact-form-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
