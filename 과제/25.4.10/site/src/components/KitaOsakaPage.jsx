import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import RestaurantCard from './RestaurantCard'
import './KitaOsakaPage.css'

export default function KitaOsakaPage() {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
            document.body.className = savedTheme
        }
    }, [])

    useEffect(() => {
        document.body.className = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }

    const restaurants = [
        {
            name: '스시 타카하시',
            rating: 4.8,
            tags: ['스시', '오마카세'],
            area: '키타구',
            address: '오사카시 키타구 1-1-1',
            description: '전통적인 스시를 제공하는 고급 스시집.',
            img: 'https://source.unsplash.com/featured/?sushi'
        },
        {
            name: '카페 로쿠',
            rating: 4.1,
            tags: ['디저트', '커피'],
            area: '키타구',
            address: '오사카시 키타구 2-2-2',
            description: '세련된 분위기의 커피숍으로, 다양한 디저트와 커피를 제공합니다.',
            img: 'https://source.unsplash.com/featured/?cafe'
        },
        {
            name: '타코야키 신메이',
            rating: 4.5,
            tags: ['타코야키', '길거리 음식'],
            area: '키타구',
            address: '오사카시 키타구 3-3-3',
            description: '오사카에서 가장 유명한 타코야키 가게 중 하나.',
            img: 'https://source.unsplash.com/featured/?takoyaki'
        },
        {
            name: '오사카 가이텐 스시',
            rating: 4.3,
            tags: ['스시', '회전 스시'],
            area: '키타구',
            address: '오사카시 키타구 4-4-4',
            description: '현대적인 분위기에서 신선한 스시를 제공합니다.',
            img: 'https://source.unsplash.com/featured/?rotating-sushi'
        },
        {
            name: '디저트 카페 101',
            rating: 4.6,
            tags: ['디저트', '커피'],
            area: '키타구',
            address: '오사카시 키타구 5-5-5',
            description: '다양한 디저트를 즐길 수 있는 아늑한 카페.',
            img: 'https://source.unsplash.com/featured/?dessert'
        },
        {
            name: '오코노미야키 마스터',
            rating: 4.4,
            tags: ['오코노미야키', '길거리 음식'],
            area: '키타구',
            address: '오사카시 키타구 6-6-6',
            description: '정통 오코노미야키를 맛볼 수 있는 곳.',
            img: 'https://source.unsplash.com/featured/?okonomiyaki'
        }
    ]

    const filtered = restaurants.filter(r =>
        r.tags.some(tag => tag.includes(searchKeyword))
    )

    return (
        <div className="container">
            <div className="left-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26240.788983871702!2d135.49846054999998!3d34.70269234999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e692f6c597ad%3A0x229707b075452dc5!2z7J2867O4IOyYpOyCrOy5tOu2gCDsmKTsgqzsubTsi5wg6riw7YOA6rWs!5e0!3m2!1sko!2skr!4v1744899989223!5m2!1sko!2skr"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ borderRadius: '10px', border: 0 }}
                ></iframe>
            </div>

            <div className="right-content">
                <div className="top-bar">
                    <input
                        type="text"
                        placeholder="음식 검색 (예: 스시)"
                        value={searchKeyword}
                        onChange={e => setSearchKeyword(e.target.value)}
                        className="search-bar"
                    />
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드'}
                    </button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="card-list"
                >
                    {filtered.map((r, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedRestaurant(r)}
                        >
                            <RestaurantCard {...r} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {selectedRestaurant && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedRestaurant.name}</h2>
                        <img src={selectedRestaurant.img} alt={selectedRestaurant.name} className="modal-image" />
                        <p><strong>평점:</strong> {selectedRestaurant.rating}</p>
                        <p><strong>주소:</strong> {selectedRestaurant.address}</p>
                        <p><strong>설명:</strong> {selectedRestaurant.description}</p>
                        <button onClick={() => setSelectedRestaurant(null)} className="close-button">닫기</button>
                    </div>
                </div>
            )}
        </div>
    )
}
