import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

const reviews = [
  {
    id: 1,
    avatar:
      "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
    name: "John Doe",
    date: "29 Sep 2023 06:40 PM",
    rating: 1,
    content:
      "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
  },
  {
    id: 2,
    avatar:
      "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
    name: "John Doe",
    date: "29 Sep 2023 06:40 PM",
    rating: 2,
    content:
      "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
  },

  {
    id: 3,
    avatar:
      "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
    name: "John Doe",
    date: "29 Sep 2023 06:40 PM",
    rating: 3,
    content:
      "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
  },
  {
    id: 4,
    avatar:
      "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
    name: "John Doe",
    date: "29 Sep 2023 06:40 PM",
    rating: 3.5,
    content:
      "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
  },
];

const ReviewTab = () => {
  return (
    <div>
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-start">
        <div className="lg:basis-[40%] basis-full w-full md:border-r lg:mr-6 lg:pr-6">
          <div className="flex items-end mb-6">
            <span className="text-2xl font-bold">3.40</span>
            <Star className="fill-yellow-400 ml-2 stroke-yellow-400" />
            <span className="text-gray-500 ml-2">5 Overall Ratings</span>
          </div>

          <div className="space-y-2 border-b border-dashed mb-6 pb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center w-16 justify-center">
                <span>5</span>
                <Star className="fill-yellow-400 ml-2 stroke-yellow-400" />
              </div>
              <div className="w-full bg-gray-200 rounded-full">
                <div className="w-2/4 h-2 bg-primary rounded-full" />
              </div>
              <span>2</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center w-16 justify-center">
                <span>4</span>
                <Star className="fill-yellow-400 ml-2 stroke-yellow-400" />
              </div>
              <div className="w-full bg-gray-200 rounded-full">
                <div className="w-1/4 h-2 bg-primary rounded-full" />
              </div>
              <span>1</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center w-16 justify-center">
                <span>3</span>
                <Star className="fill-yellow-400 ml-2 stroke-yellow-400" />
              </div>
              <div className="w-full bg-gray-200 rounded-full">
                <div className="w-0 h-2 bg-primary rounded-full" />
              </div>
              <span>0</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center w-16 justify-center">
                <span>2</span>
                <Star className="fill-yellow-400 ml-2 stroke-yellow-400" />
              </div>
              <div className="w-full bg-gray-200 rounded-full">
                <div className="w-1/4 h-2 bg-orange-400 rounded-full" />
              </div>
              <span>1</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center w-16 justify-center">
                <span>1</span>
                <Star className="fill-yellow-400 ml-2 stroke-yellow-400" />
              </div>
              <div className="w-full bg-gray-200 rounded-full">
                <div className="w-1/4 h-2 bg-red-400 rounded-full" />
              </div>
              <span>1</span>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Review this product</h4>
            <p className="text-sm text-gray-500">
              Let other customers know what you think
            </p>
            <Button variant="outline" className="mt-2 w-full">
              Write a Review
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:flex-1">
          <ScrollArea className="h-[500px]">
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="p-4 rounded-md bg-secondary">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={70}
                      height={70}
                      className="rounded-full"
                    />
                    <div className="flex justify-between w-full items-start">
                      <div className="flex flex-col">
                        <h3 className="font-bold">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* based on rating, show stars also implement the half star */}
                        {Array.from({ length: Math.floor(review.rating) }).map(
                          (_, index) => (
                            <Star
                              size={16}
                              key={index}
                              className="fill-yellow-400 ml-2 stroke-yellow-400"
                            />
                          )
                        )}
                        {review.rating % 1 !== 0 && (
                          <>
                            <StarHalf
                              size={16}
                              className=" stroke-yellow-400 "
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <p>{review.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ReviewTab;
