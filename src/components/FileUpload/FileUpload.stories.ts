import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './FileUpload.js'

const meta: Meta<typeof FileUpload> = {
  title: 'GDS/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the file input',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the file input',
    },
    label: {
      control: 'text',
      description: 'Label text for the file upload',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    accept: {
      control: 'text',
      description: 'File type restrictions (mime types)',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    onChange: {
      action: 'filesChanged',
      description: 'Callback when files are selected',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    onChange: (files: FileList | null) => console.log('Files selected:', files),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'file-upload-1',
    name: 'file-upload',
    label: 'Upload a file',
  },
}

export const WithHint: Story = {
  args: {
    id: 'file-upload-2',
    name: 'document',
    label: 'Upload your passport',
    hint: 'Your passport must be valid for at least 6 months',
  },
}

export const WithError: Story = {
  args: {
    id: 'file-upload-3',
    name: 'document-error',
    label: 'Upload a file',
    error: 'The selected file must be a PDF, JPG or PNG',
  },
}

export const PdfOnly: Story = {
  args: {
    id: 'pdf-upload',
    name: 'pdf-document',
    label: 'Upload PDF document',
    hint: 'The file must be in PDF format and smaller than 10MB',
    accept: '.pdf,application/pdf',
  },
}

export const ImageFiles: Story = {
  args: {
    id: 'image-upload',
    name: 'photos',
    label: 'Upload photographs',
    hint: 'You can upload JPG, PNG or GIF files',
    accept: 'image/*',
    multiple: true,
  },
}

export const MultipleDocuments: Story = {
  args: {
    id: 'multiple-docs',
    name: 'evidence',
    label: 'Upload evidence documents',
    hint: 'Select all relevant documents (PDF, Word, or images)',
    accept: '.pdf,.doc,.docx,image/*',
    multiple: true,
  },
}
