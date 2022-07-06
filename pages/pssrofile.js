import React, { useState } from 'react'
import styles from '../styles/profile.module.css'
import linkedln from '../public/linkedIn.svg'
import github from '../public/github.svg'
import website from '../public/web.svg'
import SnippetCard from '../components/Snippetcard'

export default function Profile() {


    const [currentTab, setCurrentTab] = useState('about')

    const AboutTab = () => {
        return (
            <div className={styles.Data}>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ac odio sit amet metus bibendum egestas id sodales sapien.
                    e eu tincidunt
                    diam. Integer lobortis dui risus, posuere tincidunt dolor elementum id.
                </p>
            </div>
        )
    }

    const SavedTab = () => {
        return (
            <>
                <h3>Saved Snippets</h3>
                <div className={`contentArea`}>
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                </div>
            </>
        )
    }

    const MyPost = () => {
        return (
            <>
                <h3>My Snippets</h3>
                <div className={`contentArea`}>
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                    <SnippetCard type={'save'} />
                </div>
            </>

        )
    }

    const TabHandler = () => {
        switch (currentTab) {
            case 'about':
                return <AboutTab />
            case 'saved':
                return <SavedTab />
            default:
                return <MyPost />
        }
    }

    const changeTab = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <div className={`screen flex ${styles.profilePage}`}>
            <div className={styles.sidePanel}>
                <span onClick={() => changeTab('about')} className={styles.panels}>About </span>
                <span onClick={() => changeTab('saved')} className={styles.panels}>Saved</span>
                <span onClick={() => changeTab('myposts')} className={styles.panels}>My Posts</span>
            </div>
            <div className={styles.profileDiv}>
                <div className={`flex ${styles.banner}`}>
                    <img alt='Author image' width={100} height={100} src='https://github.com/suyashvash.png' />
                    <div className={styles.profileData}>
                        <h3>Suyash Vashishtha</h3>
                        <div className={styles.socialHolder}>
                            <img alt='LinkedIn Logos' src={linkedln.src} />
                            <img alt='GitHub Logo' src={github.src} />
                            <img alt='Portfolio website' src={website.src} />
                        </div>

                    </div>
                </div>
                <TabHandler />

            </div>

        </div>
    )
}