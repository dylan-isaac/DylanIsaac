const { Octokit } = require('@octokit/rest');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    const data = JSON.parse(event.body);
    const { name, title, message, photoUrl, eventSlug, timestamp } = data;

    // Validate required fields
    if (!name || !message || !eventSlug) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Initialize Octokit with GitHub token
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    // Create issue body with structured data
    const issueBody = `
## New Guestbook Entry

**Event:** ${eventSlug}
**Name:** ${name}
**Title:** ${title || 'Not provided'}
**Timestamp:** ${timestamp}
**Photo URL:** ${photoUrl || 'No photo'}

### Message
${message}

---
*This entry was submitted via the event guestbook form.*

### Automation Data (Do not edit)
\`\`\`json
${JSON.stringify({ name, title, message, photoUrl, eventSlug, timestamp }, null, 2)}
\`\`\`
`;

    // Create GitHub issue
    const response = await octokit.rest.issues.create({
      owner: process.env.GITHUB_OWNER || 'dylanisaac',
      repo: process.env.GITHUB_REPO || 'dylanisa.ac',
      title: `Guestbook: ${name} - ${eventSlug}`,
      body: issueBody,
      labels: ['guestbook', 'pending-review', eventSlug],
    });

    console.log('GitHub issue created:', response.data.number);

    return {
      statusCode: 202,
      body: JSON.stringify({
        success: true,
        message: 'Guestbook entry submitted successfully',
        issueNumber: response.data.number,
      }),
    };
  } catch (error) {
    console.error('Error processing guestbook submission:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process submission',
        details: error.message,
      }),
    };
  }
};