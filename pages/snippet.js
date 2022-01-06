import styles from '../styles/SnippetScreen.module.css'
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Clipboard from 'react-clipboard.js';
import Head from 'next/head';
import Button from '../components/Button';

export default function SnippetPage() {

    const code = `
class Account:
    def __init__(self, id=0, balance=100, annual_interest_rate=0):
        self.id = int(id)
        self.balance = float(balance)
        self.annual_interest_rate = float(annual_interest_rate)

    def get_id(self):
        return self.id

    def set_id(self, id):
        self.id = id

    def get_balance(self):
        return self.balance

    def set_balance(self, balance):
        self.balance = balance

    def get_annual_interest_rate(self):
        return self.annual_interest_rate

    def set_annual_interest_rate(self, annual_interest_rate):
        self.annual_interest_rate = annual_interest_rate

    def get_monthly_interest_rate(self):
        return self.annual_interest_rate / 12

    def get_monthly_interest(self):
        return self.balance * self.get_monthly_interest_rate()

    def withdraw(self, withdraw):
        self.balance -= withdraw

    def deposit(self, deposit):
        self.balance += deposit

def main():
    account1 = Account(id=1122, balance=20000, annual_interest_rate=4.5)
    account1.withdraw(2500)
    account1.deposit(3000)
    print(account1.get_id())
    print(account1.get_balance())
    print(account1.get_monthly_interest_rate())
    print(account1.get_monthly_interest())

main()`

    const suggested = [
        { title: 'OOP with core' },
        { title: 'Selenium with axios' },
        { title: 'Python sorting algo' },
        { title: 'OOP with core' },
        { title: 'Selenium with axios' },
        { title: 'Python sorting algo' },
        { title: 'OOP with core' },
        { title: 'Selenium with axios' },
        { title: 'Python sorting algo' },
        { title: 'OOP with core' },
        { title: 'Selenium with axios' },
        { title: 'Python sorting algo' },
        { title: 'OOP with core' },
        { title: 'Selenium with axios' },
        { title: 'Python sorting algo' },
    ]

    const seoTags = [
        { tagName: 'OOP with core' },
        { tagName: 'Selenium with axios' },
        { tagName: 'Python sorting algo' },
        { tagName: 'OOP with core' },
        { tagName: 'Selenium with axios' },
        { tagName: 'Python sorting algo' },
        { tagName: 'OOP with core' },
        { tagName: 'Selenium with axios' },
        { tagName: 'Python sorting algo' },
        { tagNamec: 'OOP with core' },
        { tagName: 'Selenium with axios' },
        { tagName: 'Python sorting algo' },
        { tagName: 'OOP with core' },
        { tagName: 'Selenium with axios' },
        { tagName: 'Python sorting algo' },
    ]


    return (
        <div className={`screen ${styles.snippetPage}`}>
            <Head>
                <title>Snippet name | Snippet Sauce</title>
            </Head>

            <div className={styles.suggestedTab}>
                <h3 className={styles.suggestedTitle}>Similar Snippets</h3>
                <div>
                    {suggested &&
                        suggested.map(link => (
                            <Link href={{ pathname: '/snippet' }}>
                                <a className={styles.suggestedLink}>{link.title}</a>
                            </Link>
                        ))}
                </div>

            </div>
            <div className={styles.snippetScreen}>
                <div className={styles.snippetHeader}>
                    <div>
                        <h1 className={styles.snippetTitle}>Object Oriented Programming</h1>
                        <p className={styles.snippetlang}> <strong>Language - Python</strong> </p>
                    </div>

                    <div>
                        <button className={styles.shareBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3 12c0 1.654 1.346 3 3 3c.794 0 1.512-.315 2.049-.82l5.991 3.424c-.018.13-.04.26-.04.396c0 1.654 1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3c-.794 0-1.512.315-2.049.82L8.96 12.397c.018-.131.04-.261.04-.397s-.022-.266-.04-.397l5.991-3.423c.537.505 1.255.82 2.049.82c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .136.022.266.04.397L8.049 9.82A2.982 2.982 0 0 0 6 9c-1.654 0-3 1.346-3 3z" fill="red" /></svg>
                        </button>

                        <button className={styles.shareBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="28" height="28" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="red"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" /></g></svg>
                        </button>

                    </div>
                </div>

                <div className={styles.snippetData}>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean ac odio sit amet metus bibendum egestas id sodales sapien.
                        Maecenas eleifend ultricies leo, sed tempor lorem. Praesent mollis
                        luctus nisl, vel tincidunt libero viverra sit amet. Praesent ac
                        mauris aliquet, sagittis sapien sed, ullamcorper sapien. Sed id est
                        vel sem consectetur cursus. Nulla urna purus, tristique sit amet
                        lectus vel, semper maximus nibh. Curabitur pharetra mollis mi quis
                        congue. Cras ut eros ac sapien varius lacinia. Quisque eu tincidunt
                        diam. Integer lobortis dui risus, posuere tincidunt dolor elementum id.
                    </p>

                    <br />
                    {/* <p className={styles.snippetHeading}> <strong>Snippet Code</strong> </p> */}
                    <div className={styles.codeTerminal}>
                        <div className={styles.terminalHead}>
                            <div className="head-dot-holder">
                                <svg stroke="currentColor" fill="#ff5f56" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="8"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="#ffbd2e" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="8"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="#27c93f" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="8"></circle>
                                </svg>
                            </div>


                            <Clipboard onClick={() => alert("Copied Sauce Successfully!")} className={styles.copyButton} data-clipboard-text={"snippetBody.snippet_code"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                            </Clipboard>
                        </div>
                        <SyntaxHighlighter className="code-area" language="python" style={atomOneDark}>{code}</SyntaxHighlighter>

                    </div>
                    <br />
                    <p className={styles.snippetHeading}>Related tags</p>
                    <div className={styles.snippetSeo}>
                        {seoTags &&
                            seoTags.map((tag, index) => <span className={styles.seoTags} key={index}>{tag.tagName}</span>)
                        }
                    </div>

                    <br />
                    <p className={styles.snippetHeading}>Author</p>
                    <div className={styles.snippetAutherHolder}>
                        <img src='https://github.com/suyashvash.png' className={styles.authorPic} />
                        <div className={styles.authorData}>
                            <p>Suyash Vashishtha</p>
                            <a href='' target={'_blank'} rel={'no-ref'} style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}