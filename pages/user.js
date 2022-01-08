import React, { useState } from 'react'
import styles from '../styles/profile.module.css'
import linkedln from '../public/linkedIn.svg'
import github from '../public/github.svg'
import website from '../public/web.svg'
import SnippetCard from '../components/Snippetcard'

export default function UserProfile() {
    return (
        <div className={`screen ${styles.profilePage}`}>

            <div className={styles.profileDiv}>
                <div className={styles.banner}>
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
                <div className={styles.Data}>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean ac odio sit amet metus bibendum egestas id sodales sapien.
                        e eu tincidunt
                        diam. Integer lobortis dui risus, posuere tincidunt dolor elementum id.
                    </p>
                </div>

                <h3>Suyash's Snippets</h3>
                <div className={styles.contentArea}>
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


            </div>

        </div>
    )
}