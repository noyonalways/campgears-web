import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiX } from "react-icons/hi";
import { toast } from "sonner";
import Button from "../../../components/ui/button";

interface IFormInputs {
  fullName: string;
  email: string;
  rating: number;
  comment: string;
}

const AddReviewModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(4); // State to manage rating value
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      rating: 4, // Initial default rating
      comment: "",
    },
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onRatingChange = (value: number) => {
    setRating(value); // Update the state to reflect the change in the UI
    setValue("rating", value); // Update the form value
  };

  const onSubmit = async (data: IFormInputs) => {
    try {
      console.log(data); // To see the form data including the rating
      // Replace this with your review creation logic
      // const result = await createReview({ productId, ...data }).unwrap();
      toast.success("Review added successfully!", {
        position: "top-right",
        className: "text-primary",
      });
      toggleModal();
      reset();
    } catch (error) {
      toast.error("Failed to add review.", {
        position: "top-right",
        className: "text-red-500",
      });
    }
  };

  return (
    <div className="font-montserrat">
      <button
        className="px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-primary text-primary border border-primary rounded-md font-medium hover:bg-primary hover:text-white duration-200"
        onClick={toggleModal}
      >
        Add Review
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center lg:items-center overflow-x-hidden overflow-y-auto bg-white lg:bg-black/90 lg:py-8">
          <div className="relative w-full max-w-lg">
            {/* Modal content */}
            <div className="bg-white p-1 lg:p-4 lg:rounded">
              <div className="flex justify-between items-center p-4 lg:px-0 border-b">
                <h2 className="text-lg font-medium">Add Your Review</h2>
                <button
                  title="Close"
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <HiX size={24} />
                </button>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-4 lg:p-6 lg:px-0"
              >
                <div className="grid grid-cols-1 gap-4">
                  <Rating
                    value={rating}
                    className="max-w-56 mx-auto mb-4"
                    onChange={onRatingChange} // Handle rating change
                  />
                  {errors.rating && (
                    <span className="text-red-500">Rating is required</span>
                  )}

                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.fullName && (
                    <span className="text-red-500">
                      {errors.fullName.message}
                    </span>
                  )}

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="border border-gray-300 rounded p-2"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}

                  <label htmlFor="comment">Comment</label>
                  <textarea
                    rows={4}
                    id="comment"
                    {...register("comment", {
                      required: "Comment is required",
                    })}
                    className="border border-gray-300 rounded p-2 resize-none"
                  />
                  {errors.comment && (
                    <span className="text-red-500">
                      {errors.comment.message}
                    </span>
                  )}
                </div>

                <div className="flex justify-end mt-4">
                  <Button
                    type="submit"
                    className="btn focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Submit Review
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddReviewModal;
