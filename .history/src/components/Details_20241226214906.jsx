import React from "react";
import { useLocation } from "react-router-dom";
import { Share2, Heart, Flag, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Details = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/90 hover:bg-white"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/90 hover:bg-white"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Price and Title */}
          <div>
            <h1 className="text-4xl font-bold">
              ₹{data.price.toLocaleString("en-IN")}
            </h1>
            <h2 className="text-xl mt-2 text-gray-600">{data.title}</h2>
          </div>

          {/* Location and Posted Date */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Location, India</span>
            <span>Posted Today</span>
          </div>

          {/* Seller Information */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">
                    {data.seller?.name?.[0] || "S"}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold">
                    {data.seller?.name || "Seller Name"}
                  </h3>
                  <p className="text-sm text-gray-500">Member since Jan 2024</p>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="mt-6 flex gap-4">
                <Button className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Seller
                </Button>
                <Button variant="outline" className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category</span>
                  <span>{data.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Brand</span>
                  <span>{data.brand || "Not specified"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Condition</span>
                  <span>{data.condition || "Used"}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Description</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {data.description}
              </p>
            </CardContent>
          </Card>

          {/* Report Button */}
          <div className="flex justify-center">
            <Button variant="ghost" className="text-gray-500">
              <Flag className="mr-2 h-4 w-4" />
              Report this ad
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
