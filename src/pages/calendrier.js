import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Calendrier = () => (
  <Layout>
    <SEO title="Calendrier" />
    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=bTJkYWYyczRnMGFqMWFxMWE5cGJxMTBuMWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F4511E&amp;showTz=0&amp;showCalendars=0&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0" className="calendar" title="iframeCalendar"></iframe>
  </Layout>
)

export default Calendrier
