'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './residentform.module.css'

type ResidentFormProps = {
    initialData?: any;
    editingIndex?: number | null;
    onClose: () => void;
};

const emptyForm = {
    lastName: '',
    firstName: '',
    middleName: '',
    alias: '',
    birthDate: '',
    age: '',
    placeofbirth: '',
    height: '',
    weight: '',
    gender: '',
    email: '',
    voterstatus: '',
    civilstatus: '',
    citizenship: '',
    telephone: '',
    mobile: ''
};

const ResidentForm: React.FC<ResidentFormProps> = ({ initialData, editingIndex, onClose }) => {
    const router = useRouter();
    const [formData, setFormData] = useState(emptyForm);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData(emptyForm);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let residents = JSON.parse(localStorage.getItem('residents') || '[]');

        if (editingIndex !== null && editingIndex !== undefined) {
            // Edit mode: update the resident at the given index
            residents[editingIndex] = formData;
        } else {
            // Add mode: add new resident
            residents.push(formData);
        }

        localStorage.setItem('residents', JSON.stringify(residents));
        onClose();
    };

    return (
        <>
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>Create Resident Data</h1>
            <form method='post' onSubmit={handleSubmit}>
                <div className={styles.formGroupRow1}>
                    <div className={styles.formGrid1}>
                        <div>
                            <label htmlFor="lastName">Last Name: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="lastName" name="lastName" placeholder='Ex. Cruz' required value={formData.lastName} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="firstName">First Name: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="firstName" name="firstName" placeholder='Ex. Juan' required value={formData.firstName} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="middleName">Middle Name: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="middleName" name="middleName" placeholder='Ex. Dela' required value={formData.middleName} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="alias">Alias: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="alias" name="alias" placeholder='Ex. JDC' value={formData.alias} onChange={handleChange} />
                        </div>
                    </div>   
                </div>
                <div className={styles.formGroupRow2}>
                    <div className={styles.formGrid2}>
                        <div>
                            <label htmlFor='birthDate'>Birth Date: </label>
                            <br />
                            <input className={styles.inputField} type="date" id="birthDate" name="birthDate" required value={formData.birthDate} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="age">Age: </label>
                            <br />
                            <input className={styles.inputField} type="number" id="age" name="age" required value={formData.age} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="placeofbirth">Place of Birth: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="placeofbirth" name="placeofbirth" required value={formData.placeofbirth} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="height">Height (cm): </label>
                            <br />
                            <input className={styles.inputField} type="number" id="height" name="height" value={formData.height} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="weight">Weight (kg): </label>
                            <br />
                            <input className={styles.inputField} type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="gender">Gender: </label>
                            <br />
                            <select className={styles.inputField} id="gender" name="gender" required value={formData.gender} onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <br />
                            <input className={styles.inputFieldEmail} type="email" id="email" name="email" required value={formData.email} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className={styles.formGroupRow3}>
                    <div className={styles.formGrid3}>
                        <div>
                            <label htmlFor="voterstatus">Voter Status: </label>
                            <br />
                            <select className={styles.inputField} id="voterstatus" name="voterstatus" required value={formData.voterstatus} onChange={handleChange}>
                                <option value="">Select Status</option>
                                <option value="Registered">Registered</option>
                                <option value="Not Registered">Not Registered</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="civilstatus">Civil Status: </label>
                            <br />
                            <select className={styles.inputField} id="civilstatus" name="civilstatus" required value={formData.civilstatus} onChange={handleChange}>
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
                            <input className={styles.inputField} type="text" id="citizenship" name="citizenship" placeholder='Ex. Filipino' required value={formData.citizenship} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="telephone">Telephone: </label>
                            <br />
                            <input className={styles.inputField} type="number" id="telephone" name="telephone" placeholder='Ex. 87000' value={formData.telephone} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="mobile">Mobile: </label>
                            <br />
                            <input className={styles.inputField} type="number" id="mobile" name="mobile" placeholder='Ex. 09091234567' required value={formData.mobile} onChange={handleChange}/>
                        </div>
                    </div>   
                </div>
                <button type="submit" className={styles.submit}>{editingIndex !== null && editingIndex !== undefined ? "Update" : "Add"} Resident</button>
                <button type="button" onClick={onClose} className={styles.cancel}>Cancel</button>
            </form>
        </div>
        </>
    );
}
export default ResidentForm;