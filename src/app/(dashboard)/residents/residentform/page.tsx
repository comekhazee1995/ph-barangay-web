import styles from './residentform.module.css'

export default function ResidentForm() {
    return (
        <>
        <div>
            <h1>Create Resident Data</h1>
            <form action="submit" method='post'>
                <div className={styles.formGroupRow1}>
                    <div className={styles.formGrid1}>
                        <div>
                            <label htmlFor="lastName">Last Name: </label>
                            <br />
                            <input type="text" id="lastName" name="lastName" placeholder='Ex. Cruz' required />
                        </div>
                        <div>
                            <label htmlFor="firstName">First Name: </label>
                            <br />
                            <input type="text" id="firstName" name="firstName" placeholder='Ex. Juan' required />
                        </div>
                        <div>
                            <label htmlFor="middleName">Middle Name: </label>
                            <br />
                            <input type="text" id="middleName" name="middleName" placeholder='Ex. Dela' required/>
                        </div>
                        <div>
                            <label htmlFor="alias">Alias: </label>
                            <br />
                            <input type="text" id="alias" name="alias" placeholder='Ex. JDC' />
                        </div>
                    </div>   
                </div>
                <div className={styles.formGroupRow2}>
                    <div className={styles.formGrid2}>
                        <div>
                            <label htmlFor='bithDate'>Birth Date: </label>
                            <br />
                            <input type="date" id="birthDate" name="birthDate" required />
                        </div>
                        <div>
                            <label htmlFor="age">Age: </label>
                            <br />
                            <input type="number" id="age" name="age" required />
                        </div>
                        <div>
                            <label htmlFor="placeofbirth">Place of Birth: </label>
                            <br />
                            <input type="text" id="placeofbirth" name="placeofbirth" required/>
                        </div>
                        <div>
                            <label htmlFor="height">Height (cm): </label>
                            <br />
                            <input type="number" id="height" name="height" />
                        </div>
                        <div>
                            <label htmlFor="weight">Weight (kg): </label>
                            <br />
                            <input type="number" id="weight" name="weight" />
                        </div>
                        <div>
                            <label htmlFor="gender">Gender: </label>
                            <br />
                            <input type="text" id="gender" name="gender" required/>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <br />
                            <input type="email" id="email" name="email" required/>
                        </div>
                    </div>
                </div>
                <div className={styles.formGroupRow3}>
                    <div className={styles.formGrid3}>
                        <div>
                            <label htmlFor="voterstatus">Voter Status: </label>
                            <br />
                            <input type="text" id="voterstatus" name="voterstatus" required />
                        </div>
                        <div>
                            <label htmlFor="civilstatus">Civil Status: </label>
                            <br />
                            <input type="text" id="civilstatus" name="civilstatus" required />
                        </div>
                        <div>
                            <label htmlFor="citizenship">CitizenShip: </label>
                            <br />
                            <input type="text" id="citizenship" name="citizenship" placeholder='Ex. Filipino' required/>
                        </div>
                        <div>
                            <label htmlFor="telephone">Telephone: </label>
                            <br />
                            <input type="number" id="telephone" name="telephone" placeholder='Ex. 87000'/>
                        </div>
                        <div>
                            <label htmlFor="mobile">Mobile: </label>
                            <br />
                            <input type="number" id="mobile" name="mobile" placeholder='Ex. 09091234567' required/>
                        </div>
                    </div>   
                </div>
            </form>
            <button type="submit" className={styles.submit}>Submit</button>
        </div>
        </>
        
    );
}