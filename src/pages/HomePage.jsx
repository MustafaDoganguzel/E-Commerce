import React from 'react'
import EditorsPick from '../components/EditorsPick'
import BestSeller from '../components/BestSeller'
import PromoCard from '../components/PromoCard'
import FeaturedPosts from '../components/FeaturedPosts'
import Slider from '../layout/Slider'

export default function HomePage() {
    return (
        <div >
            <Slider />
            <EditorsPick />
            <BestSeller />
            <Slider />
            <PromoCard />
            <FeaturedPosts />

        </div>
    )
}
