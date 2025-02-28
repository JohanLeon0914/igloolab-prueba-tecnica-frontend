"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Product } from "../types/product";
import ProductsData from "./ProductData";
import Link from "next/link";

interface ProductListProps {
  products: Product[];
  singleCarousel?: boolean; 
}

const chunkArray = (arr: Product[], size: number) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
  );
};

export default function ProductList({ products, singleCarousel = false }: ProductListProps) {
  const productChunks = singleCarousel ? [products] : chunkArray(products, 6);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-end mb-4">
        <Link href="/products/add-product" className="bg-blue-500 text-white px-4 py-2 mb-2 rounded-md hover:bg-blue-600 transition">
          Agregar Producto
        </Link>
      </div>
      {productChunks.map((chunk, index) => (
        <div key={index} className="mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="mySwiper"
          >
            {chunk.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductsData item={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
