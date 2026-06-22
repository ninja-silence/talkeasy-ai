import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Card, CardContent } from '../components/ui/Card'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">We'd love to hear from you. Send us a message!</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                {submitted ? (
                  <Card className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">Thank you!</h3>
                      <p className="text-green-800 dark:text-green-200">Your message has been sent successfully. We'll get back to you soon.</p>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full h-10">Send Message</Button>
                  </form>
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">Email</h4>
                      <p><a href="mailto:hello@voicelink.com" className="text-primary hover:underline">hello@voicelink.com</a></p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">Phone</h4>
                      <p><a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-8900</a></p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">Address</h4>
                      <p>123 Tech Street<br />San Francisco, CA 94105<br />United States</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">Hours</h4>
                      <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
