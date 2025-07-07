import styles from './residentform.module.css'

export default function ResidentForm() {
    return (
        <>
        <div className={styles.card}>
            <h1>Create Resident Data</h1>
            <form method='post'>
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
                            <label htmlFor='birthDate'>Birth Date: </label>
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
                            <select id="gender" name="gender" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
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
                            <select id="voterstatus" name="voterstatus" required>
                                <option value="">Select Status</option>
                                <option value="Registered">Registered</option>
                                <option value="Not Registered">Not Registered</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="civilstatus">Civil Status: </label>
                            <br />
                            <select id="civilstatus" name="civilstatus" required>
                                <option value="">Select Status</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Widowed">Widowed</option>
                                <option value="Separated">Separated</option>
                            </select>
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
                <button type="submit" className={styles.submit}>Submit</button>
            </form>
        </div>
        </>
    );
}