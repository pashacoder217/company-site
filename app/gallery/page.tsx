import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery/gallery-grid"
import GalleryBanner from "@/components/gallery/gallery-banner"

export const metadata: Metadata = {
  title: "Gallery - Glow Unisex hive",
  description: "View our gallery of hairstyles, nail art, makeup looks, and more from Glow Unisex hive.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryBanner />
      <div className="py-16">
        <div className="container-custom">
          <GalleryGrid />
        </div>
      </div>
    </>
  )
}

