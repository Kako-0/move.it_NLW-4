export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '10%' }} />
                <span className="current-xp" style={{ left:'10%' }}> 60 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}