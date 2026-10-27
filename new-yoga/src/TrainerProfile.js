function TrainerProfile({ profile }) {
return (
<>
<h1>Profile Details</h1>
<section className="profile-details" aria-label="Submitted application details">
<p>
<strong>Full name:</strong> {profile.name}
</p>
<p>
<strong>Email address:</strong> {profile.email}
</p>
<p>
<strong>Phone number:</strong> {profile.phone || 'Not provided'}
</p>
<p>
<strong>Qualification:</strong> {profile.qualification}
</p>
<p>
<strong>Resume:</strong> {profile.resume}
</p>

<h5>Join zoom meeting for interview section with admin (20 min meeting)</h5>
<div className="meeting-actions">
<a
className="zoom-meeting-link"
href="https://zoom.us/meeting/schedule"
target="_blank"
rel="noopener noreferrer"
>
Create Zoom meeting
</a>
<a className="apply-link" href="/apply">
Back to home
</a>
</div>
</section>
</>
);
}

export default TrainerProfile;
