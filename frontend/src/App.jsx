
import './App.css'
import { RoleCard } from './RoleCard'

function App() {
  

  return (
    <div className = "app-container"> 
    <header className = "navbar">
      <h3>TalentOS</h3>
      <p>MERN Job Portal · UI/UX Prototype v1.0</p>
      </header> 

      <main className = "hero-section">
        <span className = "badge">MERN STACK · REACT · NODE · MONGODB</span> 
        <h1>Modern Job Portal Platform</h1>
        <p className = "hero-subtitle">
          A minimalist SaaS-grade recruitment platform. Select a portal to explore the full UI design system.
        </p> 
      </main>

      <div className="cards-wrapper">

      <RoleCard icon="👤" 
      iconColor="#2563EB"
      iconBg="#EFF6FF"
      subtitle = "CANDIDATE PORTAL" 
      title = "Job Seeker" 
      description = "Browse jobs, build your AI-powered resume, track applications, and get matched with top opportunities." 
      features={["AI Resume Builder", "Job Recommendations", "Application Tracking"]}
    /> 

      <RoleCard
          icon="💼"
          iconColor="#7C3AED"
          iconBg="#F5F3FF"
          subtitle="HIRING DASHBOARD" 
          title="Recruiter" 
          description="Post jobs, review applicants, parse resumes automatically, and schedule interviews at scale." 
          features={["Resume Parsing", "Candidate Pipeline", "Analytics & Reports"]}
          
       />

       <RoleCard 
          icon="🛡️"
          iconColor="#059669"
          iconBg="#ECFDF5"
          subtitle="PLATFORM CONTROL" 
          title="Administrator" 
          description="Manage users, monitor platform health, view aggregate analytics, and configure system settings." 
          features={["User Management", "Platform Analytics", "System Configuration"]}
        />
      

      </div>

    </div>
  )
}

export default App
