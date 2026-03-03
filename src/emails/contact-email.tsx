import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Preview,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name} via your portfolio</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={section}>
            <Text style={heading}>New Portfolio Contact</Text>
            <Hr style={hr} />
            <Text style={label}>From</Text>
            <Text style={value}>
              {name} ({email})
            </Text>
            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
            <Hr style={hr} />
            <Text style={footer}>
              This message was sent from your portfolio contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px",
};

const section = {
  padding: "0 48px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "600" as const,
  color: "#1a1a1a",
  marginBottom: "24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const label = {
  fontSize: "12px",
  fontWeight: "600" as const,
  color: "#6366f1",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  marginBottom: "4px",
};

const value = {
  fontSize: "16px",
  color: "#1a1a1a",
  marginTop: "0",
  marginBottom: "16px",
};

const messageStyle = {
  fontSize: "16px",
  color: "#1a1a1a",
  lineHeight: "1.6",
  marginTop: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  fontSize: "12px",
  color: "#8898aa",
  marginTop: "8px",
};
