'use client'

import { Layout } from 'antd'
import styles from './page.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Banner from '@/components/Competitions'
import Exhibition from '@/components/ExcellentWorks'
import News from '@/components/News'

const { Content } = Layout

export default function Home() {
    return (
        <Layout className={styles.layout}>
            <Header />
            <Content>
                <Banner />
                <div className="container">
                    <News />
                    <Exhibition />
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}