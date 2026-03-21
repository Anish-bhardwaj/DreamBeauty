"use client";

import React from "react";
import { Modal } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Please enter a valid email"),
  countryCode: yup.string(),
  phone: yup.string().required("Phone number is required").min(7, "Please enter a valid phone number"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

function EnquiryModal({ show, onClose, productName, productSlug }) {
  const {
    control, handleSubmit, reset, setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { fullName: "", email: "", countryCode: "1", phone: "", message: "" },
  });

  const onSubmit = (data) => {
    const { countryCode, phone, ...rest } = data;
    console.log("Enquiry Submitted:", { ...rest, countryCode: `+${countryCode}`, phone: phone.slice(countryCode.length), productName, productSlug });
    reset();
    onClose();
  };

  const handleClose = () => { reset(); onClose(); };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="enquiry-modal">
      <Modal.Header closeButton>
        <Modal.Title className="enquiry-modal-title">Enquire About {productName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="enquiry-form-group">
            <label className="enquiry-form-label">Full Name</label>
            <Controller name="fullName" control={control} render={({ field }) => (
              <input {...field} type="text" placeholder="Enter Full Name" className={`enquiry-form-input ${errors.fullName ? "enquiry-form-input-error" : ""}`} />
            )} />
            {errors.fullName && <span className="enquiry-form-error">{errors.fullName.message}</span>}
          </div>

          <div className="enquiry-form-row">
            <div className="enquiry-form-group">
              <label className="enquiry-form-label">Email Id</label>
              <Controller name="email" control={control} render={({ field }) => (
                <input {...field} type="email" placeholder="Enter Email" className={`enquiry-form-input ${errors.email ? "enquiry-form-input-error" : ""}`} />
              )} />
              {errors.email && <span className="enquiry-form-error">{errors.email.message}</span>}
            </div>

            <div className="enquiry-form-group">
              <label className="enquiry-form-label">Phone Number</label>
              <Controller name="phone" control={control} render={({ field }) => (
                <PhoneInput
                  country="us"
                  value={field.value}
                  onChange={(value, countryData) => { field.onChange(value); setValue("countryCode", countryData.dialCode); }}
                  enableSearch disableSearchIcon searchPlaceholder="Search country..."
                  inputProps={{ title: "" }}
                  inputClass="enquiry-phone-input"
                  containerClass={`enquiry-phone-container ${errors.phone ? "enquiry-phone-error" : ""}`}
                  buttonClass="enquiry-phone-btn"
                  dropdownClass="enquiry-phone-dropdown"
                  searchClass="enquiry-phone-search"
                  placeholder="Enter Phone number"
                />
              )} />
              {errors.phone && <span className="enquiry-form-error">{errors.phone.message}</span>}
            </div>
          </div>

          <div className="enquiry-form-group">
            <label className="enquiry-form-label">Message</label>
            <Controller name="message" control={control} render={({ field }) => (
              <textarea {...field} placeholder="How can we help you?" rows={4} className={`enquiry-form-input enquiry-form-textarea ${errors.message ? "enquiry-form-input-error" : ""}`} />
            )} />
            {errors.message && <span className="enquiry-form-error">{errors.message.message}</span>}
          </div>

          <button type="submit" className="enquiry-form-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EnquiryModal;
