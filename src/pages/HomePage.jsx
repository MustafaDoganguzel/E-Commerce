import React from 'react'
import EditorsPick from '../components/EditorsPick'
import BestSeller from '../components/BestSeller'
import ProductSlider from '../components/ProductSlider'
import PromoCard from '../components/PromoCard'
import FeaturedPosts from '../components/FeaturedPosts'
import PageContent from '../layout/PageContent'

export default function HomePage() {
    return (
        <div >
            <PageContent />
            <EditorsPick />
            <BestSeller />
            <ProductSlider />
            <PromoCard />
            <FeaturedPosts />

        </div>
    )
}
