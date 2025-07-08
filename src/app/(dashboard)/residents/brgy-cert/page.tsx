'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './brgy-cert.module.css'

type ResidentFormProps = {
    initialData?: any;
    editingIndex?: number | null;
    onClose: () => void;
};

const emptyForm = {
    fullname: '',
    suffix: '',
    address: '',
    residency: '',
    dateDay: '',
    dateMonth: '',
    dateYear: '',
    municipality: '',
    dateValid: ''
};

const BarangayCertificationPage: React.FC<ResidentFormProps> = ({ initialData, editingIndex, onClose }) => {
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
        setFormData(emptyForm); // Reset the form after submit
        router.push('/residents'); // Redirect to the residents page
    };

    const handleCancel = () => {
        router.push('/residents'); // Adjust the path if needed
    };

    return (
        <>
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>Apply for Barangay Certification</h1>
            <form method='post' onSubmit={handleSubmit}>
                <div className={styles.formGroupRow1}>
                    <div className={styles.formGrid1}>
                        <div>
                            <label htmlFor="fullname">Full Name: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="fullname" name="fullname" placeholder='Ex. Juan Dela Cruz' required value={formData.fullname} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="suffix">Suffix: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="suffix" name="suffix" placeholder='Ex. Jr.' value={formData.suffix} onChange={handleChange} />
                        </div>
                    </div>   
                </div>
                <div className={styles.formGroupRow2}>
                    <div className={styles.formGrid2}>
                        <div>
                            <label htmlFor='address'>Complete Address: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="address" name="address" placeholder='Ex. Purok-10 Brgy. San Juan' required value={formData.address} onChange={handleChange} />
                        </div>
                         <div>
                            <label htmlFor="residency">Years of Residency: </label>
                            <br />
                            <input className={styles.inputField} type="number" id="residency" name="residency" placeholder='Ex. 3 years' required value={formData.residency} onChange={handleChange}/>
                        </div>
                </div>
                <div className={styles.formGroupRow3}> 
                     <div className={styles.formGrid3}>
                        <div>
                            <label htmlFor="dateDay">Signed Day: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="dateDay" name="dateDay" placeholder='Ex. 8th' required value={formData.dateDay} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="dateMonth">Signed Month: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="dateMonth" name="dateMonth" placeholder='Ex. December' required value={formData.dateMonth} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="dateYear">Signed Year: </label>
                            <br />
                            <input className={styles.inputField} type="number" id="dateYear" name="dateYear" placeholder='Ex. 2025' required value={formData.dateYear} onChange={handleChange}/>
                        </div>
                    </div>
                </div>    
                </div>
                <div className={styles.formGrid4}> 
                        <div>
                            <label htmlFor="municipality">Municipality: </label>
                            <br />
                            <input className={styles.inputField} type="text" id="municipality" name="municipality" placeholder='Ex. Surigao' required value={formData.municipality} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="dateValid">Valid Date: </label>
                            <br />
                            <input className={styles.inputField} type="date" id="dateValid" name="dateValid" required value={formData.dateValid} onChange={handleChange}/>
                        </div>
                </div>
                <button type="submit" className={styles.submit}> Apply</button>
                <button type="button" onClick={handleCancel} className={styles.cancel}>Cancel</button>
            </form>
        </div>
        </>
    );
}

export default BarangayCertificationPage;