// src/components/RestaurantCard.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function RestaurantCard({ name, rating, tags, img }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}  // hover 시 카드 크기 커짐
            whileTap={{ scale: 0.95 }}    // 클릭 시 카드 크기 작아짐
            style={{
                marginBottom: '20px',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                cursor: 'pointer'
            }}
        >
            <img src={img} alt={name} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
            <h3 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>{name}</h3>
            <p>평점: {rating}</p>
            <p><strong>태그:</strong> {tags.join(', ')}</p>
        </motion.div>
    )
}
