// src/routes/+layout.server.js
export const load = async ({ locals: { getSession } }) => {
    return {
        session: await getSession(),
    }
}



// access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6ImY4b2w0aFJnNldRbEF4ZlAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjk4ODgzOTgwLCJpYXQiOjE2OTg4ODAzODAsImlzcyI6Imh0dHBzOi8va3FnbnVhbnNzbHd1dGxlbXN6dWUuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjE5YzE2YTFiLTBhOTQtNDNhMS04MjA5LTg1YTgyOWNhMGNiNCIsImVtYWlsIjoiY2FtaWxvZGlwYW9sbzEwQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZ29vZ2xlIiwicHJvdmlkZXJzIjpbImdvb2dsZSJdfSwidXNlcl9tZXRhZGF0YSI6eyJhdmF0YXJfdXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTG9kYkptaDBQcUh5ZnpfbEVrYUlEMGxkU0kwcWRpeGhwbG9pRmpFc3J6PXM5Ni1jIiwiZW1haWwiOiJjYW1pbG9kaXBhb2xvMTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6ImNhbWlsbyBkaSBwYW9sbyIsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbSIsIm5hbWUiOiJjYW1pbG8gZGkgcGFvbG8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTG9kYkptaDBQcUh5ZnpfbEVrYUlEMGxkU0kwcWRpeGhwbG9pRmpFc3J6PXM5Ni1jIiwicHJvdmlkZXJfaWQiOiIxMDg4NjAwMzc5OTI1Mjg2OTc4MDYiLCJzdWIiOiIxMDg4NjAwMzc5OTI1Mjg2OTc4MDYifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvYXV0aCIsInRpbWVzdGFtcCI6MTY5ODg4MDM4MH1dLCJzZXNzaW9uX2lkIjoiNTQwMGZiNmEtYmI1Zi00N2I3LWEzODUtYWQ3YWNiMzUwMGUxIn0.QJoXffH2xWu8nDcCVB6MbXOvVM7HKCDTByCDw2ceEtY
// expires_at=1698883980
// expires_in=3600
// provider_token=ya29.a0AfB_byCKIKs3NhksWSqJZKGBQyTgP1rU8iUes5T7M25VYQOJgAkoQ28SN5vVB4xDW14m9CKRCrNAOUzzB6IoWFo3lVmQViSdrkKHSi2wu-qU4KTpGInOWb3LhBAxt-mTA0eCtqjxIrWEtHoVWP2ZZffavD7PsTo1mqBVaCgYKASwSARISFQGOcNnCLmqRDUGh7n8NUWsXcKETVQ0171
// refresh_token=4sAt4MXnmSUB1UVIEH6Hog&token_type=bearer

