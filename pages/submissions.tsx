import PageLayout from "components/PageLayout"

export default function Submissions() {
    return (
        <PageLayout>
            <div className="submission-title">
                <h1>Submissions</h1>
            </div>
            <div className="iframe-container">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLolNL00Bu7oqRJKBkYZ51odVTG4AairCMZp43t61jJJtwYA/viewform?embedded=true">Loading…</iframe>
            </div>
        </PageLayout>
    )
}