'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLocale } from './LanguageProvider'

type FormData = {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

const projectTypes = [
  { id: 'game', tr: 'Oyun Geliştirme', en: 'Game Development' },
  { id: 'mobile', tr: 'Mobil Uygulama', en: 'Mobile App' },
  { id: 'web', tr: 'Web Geliştirme', en: 'Web Development' },
  { id: 'design', tr: 'UI/UX Tasarım', en: 'UI/UX Design' },
  { id: 'consulting', tr: 'Danışmanlık', en: 'Consulting' },
  { id: 'other', tr: 'Diğer', en: 'Other' },
]

const copy = {
  tr: {
    name: 'Ad Soyad *',
    namePlaceholder: 'Adınız ve soyadınız',
    email: 'E-posta *',
    emailPlaceholder: 'ornek@email.com',
    company: 'Şirket',
    companyPlaceholder: 'Opsiyonel',
    projectType: 'Proje Türü *',
    select: 'Seçiniz',
    message: 'Mesajınız *',
    messagePlaceholder: 'Aklınızdaki projeyi birkaç cümleyle anlatın',
    submit: 'Gönder',
    submitting: 'Gönderiliyor...',
    success: 'Teşekkürler! Mesajınızı aldık, birkaç gün içinde size yazacağız. E-posta uygulamanız açıldıysa mesajı oradan göndermeyi unutmayın.',
    errors: {
      name: 'Adınızı yazın',
      email: 'E-posta adresinizi yazın',
      emailInvalid: 'Bu e-posta adresi geçerli görünmüyor',
      projectType: 'Proje türü seçin',
      message: 'Kısa bir mesaj yazın',
    },
  },
  en: {
    name: 'Full name *',
    namePlaceholder: 'Your full name',
    email: 'Email *',
    emailPlaceholder: 'you@example.com',
    company: 'Company',
    companyPlaceholder: 'Optional',
    projectType: 'Project type *',
    select: 'Select',
    message: 'Your message *',
    messagePlaceholder: 'Tell us about your project in a few sentences',
    submit: 'Send',
    submitting: 'Sending...',
    success: 'Thanks! We’ve got your message and will get back to you within a few days. If your email app opened, don’t forget to hit send there.',
    errors: {
      name: 'Please enter your name',
      email: 'Please enter your email',
      emailInvalid: 'That email doesn’t look right',
      projectType: 'Choose a project type',
      message: 'Please write a short message',
    },
  },
}

const emptyForm: FormData = { name: '', email: '', company: '', projectType: '', message: '' }

function projectTypeLabel(id: string) {
  return projectTypes.find((type) => type.id === id)?.tr ?? ''
}

function buildMailto(data: FormData, language: string) {
  const type = projectTypeLabel(data.projectType)
  const subject = encodeURIComponent(`Drective Proje Talebi: ${type || 'Genel'}`)
  const body = encodeURIComponent(
    `Ad Soyad: ${data.name}\nE-posta: ${data.email}\nŞirket: ${data.company || '-'}\nProje Türü: ${type}\nDil: ${language}\n\nMesaj:\n${data.message}`
  )
  return `mailto:drectivegames@gmail.com?subject=${subject}&body=${body}`
}

export default function WorkWithUsForm({ compact = false }: { compact?: boolean }) {
  const { locale } = useLocale()
  const c = copy[locale]
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const validate = () => {
    const next: Partial<Record<keyof FormData, string>> = {}
    if (!formData.name.trim()) next.name = c.errors.name
    if (!formData.email.trim()) next.email = c.errors.email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = c.errors.emailInvalid
    if (!formData.projectType) next.projectType = c.errors.projectType
    if (!formData.message.trim()) next.message = c.errors.message
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          projectType: projectTypeLabel(formData.projectType),
          language: locale.toUpperCase(),
          budget: '',
          timeline: '',
        }),
      })

      if (!response.ok) {
        window.location.href = buildMailto(formData, locale.toUpperCase())
      }
      setStatus('success')
      setFormData(emptyForm)
    } catch {
      window.location.href = buildMailto(formData, locale.toUpperCase())
      setStatus('success')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldError = (field: keyof FormData) =>
    errors[field] && (
      <p className="mt-1 flex items-center gap-1 text-sm text-red-400">
        <AlertCircle className="h-4 w-4" /> {errors[field]}
      </p>
    )

  const inputClass = 'w-full rounded-sm border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-brass'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="form-name" className="mb-2 block text-sm text-foreground/80">{c.name}</label>
          <input
            id="form-name"
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            className={inputClass}
            placeholder={c.namePlaceholder}
          />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="form-email" className="mb-2 block text-sm text-foreground/80">{c.email}</label>
          <input
            id="form-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            className={inputClass}
            placeholder={c.emailPlaceholder}
          />
          {fieldError('email')}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="form-company" className="mb-2 block text-sm text-foreground/80">{c.company}</label>
          <input
            id="form-company"
            value={formData.company}
            onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
            className={inputClass}
            placeholder={c.companyPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="form-type" className="mb-2 block text-sm text-foreground/80">{c.projectType}</label>
          <select
            id="form-type"
            value={formData.projectType}
            onChange={(e) => setFormData((p) => ({ ...p, projectType: e.target.value }))}
            className={inputClass}
          >
            <option value="">{c.select}</option>
            {projectTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type[locale]}
              </option>
            ))}
          </select>
          {fieldError('projectType')}
        </div>
      </div>

      <div>
        <label htmlFor="form-message" className="mb-2 block text-sm text-foreground/80">{c.message}</label>
        <textarea
          id="form-message"
          rows={compact ? 4 : 5}
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          className={`${inputClass} resize-none`}
          placeholder={c.messagePlaceholder}
        />
        {fieldError('message')}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          c.submitting
        ) : (
          <>
            <Send className="h-4 w-4" />
            {c.submit}
          </>
        )}
      </motion.button>

      {status === 'success' && (
        <div className="flex items-start gap-2 rounded-sm border border-green-500/30 bg-green-500/10 p-4 text-green-300">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p className="m-0 text-sm">{c.success}</p>
        </div>
      )}
    </form>
  )
}
