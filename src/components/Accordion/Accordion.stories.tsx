import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, type AccordionSection } from '../Accordion/Accordion.js'
import { Paragraph } from '../Paragraph/Paragraph.js'

const meta: Meta<typeof Accordion> = {
  title: 'GDS/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the accordion',
    },
    sections: {
      control: 'object',
      description: 'Array of accordion sections with heading, content, and optional summary',
    },
    headingLevel: {
      control: 'radio',
      options: [2, 3, 4, 5, 6],
      description: 'Heading level for section headings',
    },
    rememberExpanded: {
      control: 'boolean',
      description: 'Whether to remember expanded state in browser',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicSections: AccordionSection[] = [
  {
    heading: 'Writing well for the web',
    summary: 'This is the summary for the Writing well for the web section',
    content: (
      <Paragraph>
        This is the content for Writing well for the web. It contains detailed guidance on how to
        write effective web content.
      </Paragraph>
    ),
  },
  {
    heading: 'Writing well for specialists',
    content: (
      <Paragraph>
        This is the content for Writing well for specialists. This section provides guidance
        specifically tailored for specialist audiences.
      </Paragraph>
    ),
  },
  {
    heading: 'Know your audience',
    summary: 'Understanding your users is key',
    content: (
      <Paragraph>
        This is the content for Know your audience. Research shows that users scan pages rather than
        reading them thoroughly.
      </Paragraph>
    ),
  },
]

export const Default: Story = {
  args: {
    id: 'default-accordion',
    sections: basicSections,
  },
}

export const WithExpanded: Story = {
  args: {
    id: 'expanded-accordion',
    sections: [
      {
        ...(basicSections[0] as AccordionSection),
        expanded: true,
      },
      ...basicSections.slice(1),
    ],
  },
}

export const HeadingLevel3: Story = {
  args: {
    id: 'h3-accordion',
    sections: basicSections,
    headingLevel: 3,
  },
}

export const NoRememberExpanded: Story = {
  args: {
    id: 'no-remember-accordion',
    sections: basicSections,
    rememberExpanded: false,
  },
}

export const SingleSection: Story = {
  args: {
    id: 'single-accordion',
    sections: [
      {
        heading: 'Important information',
        summary: 'Read this carefully',
        content: (
          <Paragraph>
            This accordion has only one section. This might be useful for highlighting a single
            piece of important information.
          </Paragraph>
        ),
      },
    ],
  },
}
