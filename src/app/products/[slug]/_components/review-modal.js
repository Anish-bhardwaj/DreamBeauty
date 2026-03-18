"use client";

import React from "react";
import { Modal } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactStars from "react-stars";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(1, "Please select a rating"),
  review: yup
    .string()
    .required("Review is required")
    .min(10, "Review must be at least 10 characters"),
});

function ReviewModal({ show, onClose }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      rating: 0,
      review: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Review Submitted:", data);
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="review-modal">
      <Modal.Header closeButton>
        <Modal.Title className="review-modal-title">Write a Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="review-form-group">
            <label className="review-form-label">Your Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter your name"
                  className={`review-form-input ${errors.name ? "review-form-input-error" : ""}`}
                />
              )}
            />
            {errors.name && (
              <span className="review-form-error">{errors.name.message}</span>
            )}
          </div>

          <div className="review-form-group">
            <label className="review-form-label">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className={`review-form-input ${errors.email ? "review-form-input-error" : ""}`}
                />
              )}
            />
            {errors.email && (
              <span className="review-form-error">{errors.email.message}</span>
            )}
          </div>

          <div className="review-form-group">
            <label className="review-form-label">Rating</label>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <ReactStars
                  count={5}
                  value={field.value}
                  onChange={(val) => field.onChange(val)}
                  size={28}
                  color2="#E91E63"
                  color1="#ddd"
                  half={false}
                />
              )}
            />
            {errors.rating && (
              <span className="review-form-error">{errors.rating.message}</span>
            )}
          </div>

          <div className="review-form-group">
            <label className="review-form-label">Your Review</label>
            <Controller
              name="review"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={4}
                  placeholder="Share your experience with this product"
                  className={`review-form-input review-form-textarea ${errors.review ? "review-form-input-error" : ""}`}
                />
              )}
            />
            {errors.review && (
              <span className="review-form-error">{errors.review.message}</span>
            )}
          </div>

          <button type="submit" className="review-form-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ReviewModal;
