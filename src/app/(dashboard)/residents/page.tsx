'use client';
import React, { PropsWithChildren, useState, useEffect } from "react";
import styles from './residentPage.module.css'
import Sidebar from "@/components/Sidebar";
import ResidentForm from './residentform/page';

const RESIDENTS_PER_PAGE = 6;

const ResidentPage = ({ children }: PropsWithChildren) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [residents, setResidents] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingResident, setEditingResident] = useState<any | null>(null);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const storedResidents = JSON.parse(localStorage.getItem('residents') || '[]');
        setResidents(storedResidents);
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingResident(null);
        const storedResidents = JSON.parse(localStorage.getItem('residents') || '[]');
        setResidents(storedResidents);
    };

    const handleEdit = (resident: any, idx: number) => {
        setEditingResident(resident);
        setEditingIndex(idx);
        setShowModal(true);
    };

    const handleDelete = (idx: number) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this data?');
        if (!confirmDelete) return;
        const updatedResidents = residents.filter((_, i) => i !== idx);
        setResidents(updatedResidents);
        localStorage.setItem('residents', JSON.stringify(updatedResidents));
    };

    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);
    const startIdx = (currentPage - 1) * RESIDENTS_PER_PAGE;
    const endIdx = startIdx + RESIDENTS_PER_PAGE;
    const residentsToShow = residents.slice(startIdx, endIdx);

    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <section className="h-full rounded p-4 bordered-wrapper">
                {residents.length > 0 ? (
                    <div>
                        <div className={styles.residentHeaderContainer}>
                            <h2 className={styles.residentHeader}>Registered Residents</h2>
                            <button className={styles.addButton} onClick={() => { setEditingResident(null); setEditingIndex(null); setShowModal(true); }}>Add Resident</button>
                        </div>
                        <div className={styles.residentCard}>
                            <ul className={styles.residentCategory}>
                                <li className={styles.residentList}>First Name:</li>
                                <li className={styles.residentList}>Last Name:</li>
                                <li className={styles.residentList}>Middle Name:</li>
                                <li className={styles.residentList}>Birth Date:</li>
                                <li className={styles.residentList}>Gender:</li>
                                <li className={styles.residentList}>Email:</li>
                                <li className={styles.residentList}>Mobile:</li>
                            </ul>
                        </div>
                        {residentsToShow.map((resident, idx) => (
                            <div className={styles.residentCard} key={startIdx + idx}>
                                <ul className={styles.residentDetails}>
                                    <li className={styles.residentList}>{resident.lastName}</li>
                                    <li className={styles.residentList}>{resident.firstName}</li>
                                    <li className={styles.residentList}>{resident.middleName}</li>
                                    <li className={styles.residentList}>{resident.birthDate}</li>
                                    <li className={styles.residentList}>{resident.gender}</li>
                                    <li className={styles.residentList}>{resident.email}</li>
                                    <li className={styles.residentList}>{resident.mobile}</li>
                                    <div className={styles.actionButtons}>
                                        <button className={styles.editButton} onClick={() => handleEdit(resident, startIdx + idx)}>Edit</button>
                                        <button className={styles.deleteButton} onClick={() => handleDelete(startIdx + idx)}>Delete</button>
                                    </div>
                                </ul>
                            </div>
                        ))}
                        <div style={{ display: "flex", gap: "8px", marginTop: "1rem", justifyContent: "center" }}>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    className={styles.addButton}
                                    style={{
                                        background: currentPage === i + 1 ? "#2c7230" : undefined,
                                        fontWeight: currentPage === i + 1 ? "bold" : undefined
                                    }}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={styles.residentHeaderContainer}>
                            <h2 className={styles.residentHeader}>Registered Residents</h2>
                            <button className={styles.addButton} onClick={() => { setEditingResident(null); setEditingIndex(null); setShowModal(true); }}>Add Resident</button>
                        </div>
                        <div className={styles.residentCard}>
                            <ul className={styles.residentCategory}>
                                <li className={styles.residentList}>First Name:</li>
                                <li className={styles.residentList}>Last Name:</li>
                                <li className={styles.residentList}>Middle Name:</li>
                                <li className={styles.residentList}>Birth Date:</li>
                                <li className={styles.residentList}>Gender:</li>
                                <li className={styles.residentList}>Email:</li>
                                <li className={styles.residentList}>Mobile:</li>
                            </ul>
                        </div>
                        <div className={styles.noData}><p>No resident data found.</p></div>
                    </>
                )}
                {children}
            </section>
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={handleCloseModal}>X</button> 
                        <ResidentForm
                            initialData={editingResident}
                            editingIndex={editingIndex}
                            onClose={handleCloseModal}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResidentPage;