import styles from './residentPage.module.css'

function ResidentPage() {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.pageGrid}>
                    <div>SideNav Bar</div>
                    <div>Main Page</div>
                </div>
            </div>
        </>
    );
}

export default ResidentPage;