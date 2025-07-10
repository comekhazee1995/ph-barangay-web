'use client';
import { useState, useEffect } from 'react';
import styles from './projects.module.css';

const initialProjects = [
	{
		name: 'Road Improvement Project',
		description:
			'Upgrading main roads and installing proper drainage systems throughout the barangay.',
		budget: 2500000,
		used: 1625000,
		status: 'ongoing',
		progress: 65,
		date: 'Dec 2024',
		dateLabel: 'Due',
	},
	{
		name: 'Community Center Renovation',
		description:
			'Complete renovation of the barangay hall including new facilities and equipment.',
		budget: 1800000,
		used: 1750000,
		status: 'completed',
		progress: 100,
		date: 'Oct 2024',
		dateLabel: 'Completed',
	},
	{
		name: 'Street Lighting Installation',
		description:
			'Installing LED street lights along major roads and pathways for improved safety.',
		budget: 800000,
		used: 0,
		status: 'planned',
		progress: 0,
		date: 'Jan 2025',
		dateLabel: 'Start',
	},
	{
		name: 'Waste Management System',
		description:
			'Implementing a comprehensive waste segregation and collection system.',
		budget: 1200000,
		used: 360000,
		status: 'ongoing',
		progress: 30,
		date: 'Mar 2025',
		dateLabel: 'Due',
	},
	{
		name: 'Basketball Court Construction',
		description:
			'New covered basketball court with proper flooring and lighting for community sports.',
		budget: 950000,
		used: 920000,
		status: 'completed',
		progress: 100,
		date: 'Sep 2024',
		dateLabel: 'Completed',
	},
	{
		name: 'Health Center Expansion',
		description:
			'Expanding the barangay health center to accommodate more patients and services.',
		budget: 3200000,
		used: 0,
		status: 'planned',
		progress: 0,
		date: 'Apr 2025',
		dateLabel: 'Start',
	},
];

// const statusColors = {
// 	planned: 'bg-blue-100 text-blue-800',
// 	ongoing: 'bg-yellow-100 text-yellow-800',
// 	completed: 'bg-green-100 text-green-800',
// };

// const progressColors = {
// 	planned: 'text-gray-600',
// 	ongoing: 'text-blue-600',
// 	completed: 'text-green-600',
// };

// const barColors = {
// 	planned: 'bg-gray-400',
// 	ongoing: 'bg-blue-600',
// 	completed: 'bg-green-600',
// };

export default function ProjectPage() {
    const [projects, setProjects] = useState(() => {
        // Load from localStorage or use initial data
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('projects');
            return saved ? JSON.parse(saved) : initialProjects;
        }
        return initialProjects;
    });
    const [filter, setFilter] = useState('all');
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        description: '',
        budget: '',
        status: 'planned',
    });

    useEffect(() => {
        // Save projects to localStorage whenever they change
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const handleFilter = (status) => setFilter(status);

    const filteredProjects =
        filter === 'all'
            ? projects
            : projects.filter((p) => p.status === filter);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddProject = (e) => {
        e.preventDefault();
        const progress =
            form.status === 'completed'
                ? 100
                : form.status === 'ongoing'
                ? 25
                : 0;
        const used =
            form.status === 'completed'
                ? parseInt(form.budget)
                : form.status === 'ongoing'
                ? Math.floor(parseInt(form.budget) * progress / 100)
                : 0;
        const dateLabel =
            form.status === 'completed'
                ? 'Completed'
                : form.status === 'ongoing'
                ? 'Due'
                : 'Start';
        const date = 'loading...';

        const newProject = {
            name: form.name,
            description: form.description,
            budget: parseInt(form.budget),
            used,
            status: form.status,
            progress,
            date,
            dateLabel,
        };

        setProjects((prev) => [...prev, newProject]);
        setForm({ name: '', description: '', budget: '', status: 'planned' });
        setModalOpen(false);
        alert('Project added successfully!');
    };

    const handleViewProject = (name) => {
        const project = projects.find((p) => p.name === name);
        if (project) {
            alert(
                `Project Details:\nName: ${project.name}\nDescription: ${project.description}\nBudget: ₱${project.budget}\nUsed: ₱${project.used}\nStatus: ${project.status}\nProgress: ${project.progress}%\nDate: ${project.date}`
            );
        }
    };

	return (
		<>
			<div className={styles.container}>
				<div className={styles.header}>
					<h1 className={styles.title}>Barangay Projects</h1>
					<p className={styles.subtitle}>
						Track and manage community development initiatives and infrastructure
						projects
					</p>
					<div className={styles.filterRow}>
						<div className={styles.filterBtns}>
							<button
								onClick={() => handleFilter('all')}
								className={`${styles.filterBtn} ${
									filter === 'all' ? styles.filterBtnActive : ''
								}`}
							>
								All Projects
							</button>
							<button
								onClick={() => handleFilter('ongoing')}
								className={`${styles.filterBtn} ${
									filter === 'ongoing' ? styles.filterBtnActive : ''
								}`}
							>
								Ongoing
							</button>
							<button
								onClick={() => handleFilter('completed')}
								className={`${styles.filterBtn} ${
									filter === 'completed' ? styles.filterBtnActive : ''
								}`}
							>
								Completed
							</button>
							<button
								onClick={() => handleFilter('planned')}
								className={`${styles.filterBtn} ${
									filter === 'planned' ? styles.filterBtnActive : ''
								}`}
							>
								Planned
							</button>
						</div>
						<button
							onClick={() => setModalOpen(true)}
							className={styles.addBtn}
						>
							+ Add New Project
						</button>
					</div>
				</div>
				<div className={styles.grid}>
					{filteredProjects.map((project, idx) => (
						<div key={idx} className={styles.card}>
							<div className="flex items-center justify-between mb-4">
								<span
									className={project.status === 'planned' ? styles.statusPlanned : project.status === 'ongoing' ? styles.statusOngoing : styles.statusCompleted }
									style={{
										padding: '0.25rem 0.75rem',
										borderRadius: '9999px',
										fontSize: '0.875rem',
										fontWeight: 500,
									}}
								>
									{project.status.charAt(0).toUpperCase() +
										project.status.slice(1)}
								</span>
								<div style={{ textAlign: 'right' }}>
									<p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
										Progress
									</p>
									<p
										className={
											project.status === 'planned'
												? styles.progressPlanned
												: project.status === 'ongoing'
												? styles.progressOngoing
												: styles.progressCompleted
										}
										style={{
											fontSize: '1.125rem',
											fontWeight: 'bold',
										}}
									>
										{project.progress}%
									</p>
								</div>
							</div>
							<h3
								style={{
									fontSize: '1.25rem',
									fontWeight: 'bold',
									color: '#1a202c',
									marginBottom: '0.5rem',
								}}
							>
								{project.name}
							</h3>
							<p
								style={{
									color: '#4b5563',
									marginBottom: '1rem',
								}}
							>
								{project.description}
							</p>
							<div style={{ marginBottom: '1rem' }}>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										fontSize: '0.875rem',
										color: '#6b7280',
										marginBottom: '0.25rem',
									}}
								>
									<span>Budget: ₱{project.budget.toLocaleString()}</span>
									<span>
										{project.status === 'planned'
											? 'Allocated'
											: 'Used'}
										: ₱
										{project.used.toLocaleString()}
									</span>
								</div>
								<div className={styles.progressBarBg}>
									<div
										className={
											project.status === 'planned'
												? `${styles.barPlanned} ${styles.progressBar}`
												: project.status === 'ongoing'
												? `${styles.barOngoing} ${styles.progressBar}`
												: `${styles.barCompleted} ${styles.progressBar}`
										}
										style={{ width: `${project.progress}%` }}
									></div>
								</div>
							</div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<span
									style={{
										fontSize: '0.875rem',
										color: '#6b7280',
									}}
								>
									{project.dateLabel}: {project.date}
								</span>
								<button
									onClick={() => handleViewProject(project.name)}
									style={{
										color: '#2563eb',
										fontWeight: 500,
										background: 'none',
										border: 'none',
										cursor: 'pointer',
									}}
								>
									View Details
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* Modal */}
			{modalOpen && (
				<div
					className={styles.modalOverlay}
					onClick={(e) => {
						if (e.target === e.currentTarget) setModalOpen(false);
					}}
				>
					<div className={styles.modal}>
						<h2 className={styles.modalTitle}>Add New Project</h2>
						<form onSubmit={handleAddProject}>
							<input type="text" name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="Project Name" required />
							<textarea name="description" value={form.description} onChange={handleChange} className={styles.textarea} placeholder="Description" required></textarea>
							<input type="number" name="budget" value={form.budget} onChange={handleChange} className={styles.input} placeholder="Budget (₱)" required />
							<select name="status" value={form.status} onChange={handleChange} className={styles.select}>
								<option value="planned">Planned</option>
								<option value="ongoing">Ongoing</option>
								<option value="completed">Completed</option>
							</select>
							<div className={styles.btnRow}>
								<button type="button" onClick={() => setModalOpen(false)} className={styles.cancelBtn}>Cancel</button>
								<button type="submit" className={styles.submitBtn}>Add Project</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}