import styles from '../styles/SnippetScreen.module.css'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Clipboard from 'react-clipboard.js';

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

    return (
        <div className={`screen ${styles.snippetPage}`}>
            <div className={styles.snippetScreen}>
                <div className={styles.snippetHeader}>
                    <span className={styles.langName}>Python</span>
                    <h1 className={styles.snippetTitle}>Python Class code | Object Oriented Programming</h1>
                    <div className={styles.tagHolder}>
                        <span className={styles.snippetTags}>#oop</span>
                        <span className={styles.snippetTags}>#classes</span>
                        <span className={styles.snippetTags}>#dsa</span>
                        <span className={styles.snippetTags}>#coding</span>
                    </div>
                </div>

                <div className={styles.snippetData}>

                    <h3 className={styles.snippetHeading}>Snippet Description</h3>
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
                    <h3 className={styles.snippetHeading}>Snippet Code</h3>
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

                    <h3 className={styles.snippetHeading}>Related terms</h3>


                </div>
            </div>
        </div>
    )
}