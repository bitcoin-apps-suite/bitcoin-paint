'use client'

import { AlertTriangle } from 'lucide-react'
import '../styles/ProofOfConceptBar.css'

export default function ProofOfConceptBar() {
  return (
    <div className="poc-bar">
      <div className="poc-content">
        <AlertTriangle className="w-4 h-4 poc-icon" />
        <span className="poc-text">PROOF OF CONCEPT - Bitcoin Art Gallery powered by Bitcoin OS</span>
        <AlertTriangle className="w-4 h-4 poc-icon" />
      </div>
    </div>
  )
}