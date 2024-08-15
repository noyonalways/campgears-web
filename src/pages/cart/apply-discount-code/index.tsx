import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { toast } from "sonner";
import {
  calculateTotalsAfterDiscount,
  removeDiscount,
} from "../../../redux/features/cart/cartSlice";
import { useApplyDiscountCodeMutation } from "../../../redux/features/discount/discountApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { TDiscountErrorResponse } from "../../../types/discount.type";

const ApplyDiscountCode = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get state from Redux store
  const { totalPrice, appliedDiscountCode } = useAppSelector(
    (store) => store.cart
  );

  const [applyCode, { data: discount, isLoading, error, isError, isSuccess }] =
    useApplyDiscountCodeMutation();

  const dispatch = useAppDispatch();

  const customError = error as TDiscountErrorResponse;

  const handleApplyDiscount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission
    if (!discountCode) {
      toast.error("Please enter a discount code.", {
        id: "applyDiscountCodeFilledError",
        position: "top-right",
        className: "text-red-500",
      });
      return;
    }
    applyCode({ code: discountCode, itemsTotalPrice: totalPrice });
    setDiscountCode("");
  };

  // Effect to handle discount application
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        calculateTotalsAfterDiscount({
          discountAmount: discount.data.amount,
          discountCode: discount.data.code,
        })
      );
    }
  }, [isSuccess, discount, dispatch]);

  // Effect to reapply discount when the total price changes (e.g., quantity update)
  useEffect(() => {
    if (appliedDiscountCode) {
      applyCode({ code: appliedDiscountCode, itemsTotalPrice: totalPrice });
    }
  }, [totalPrice, appliedDiscountCode, applyCode]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <CgSpinner className="animate-spin text-primary text-3xl" />
        </div>
      ) : (
        <div className="flex flex-col w-full max-w-sm mx-auto my-4">
          <div className="relative w-full">
            <button
              onClick={toggleDropdown}
              className="w-full text-site bg-transparent focus:outline-none focus:ring-0 justify-between text-sm md:text-base text-black flex items-center space-x-4 py-1 rounded"
              aria-expanded={isDropdownOpen} // Accessibility improvement
            >
              <span>Have a Discount Code?</span>
              {isDropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
            </button>

            {isDropdownOpen && (
              <div className="mt-2 duration-300">
                <form
                  className="relative flex items-center"
                  onSubmit={handleApplyDiscount}
                >
                  {appliedDiscountCode ? (
                    <input
                      type="text"
                      readOnly
                      value={appliedDiscountCode}
                      className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-brand focus:border-transparent"
                    />
                  ) : (
                    <input
                      id="discount-code"
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-brand focus:border-transparent"
                      placeholder="Enter code"
                    />
                  )}

                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-4 py-2 bg-primary text-white text-sm rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary leading-none"
                  >
                    Apply
                  </button>
                </form>
                {isError && (
                  <span className="text-red-500 text-sm mt-1 inline-block">
                    {customError.data.message}
                  </span>
                )}
                {isSuccess && appliedDiscountCode && (
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-green-500 text-sm inline-block leading-none">
                      {discount?.data.description}
                    </span>
                    <button
                      onClick={() => dispatch(removeDiscount())}
                      className="text-sm underline text-end"
                    >
                      Remove Discount
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyDiscountCode;
