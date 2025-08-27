const { isValidEmail } = require('./server');

// Test email validation function
function testEmailValidation() {
    console.log('🧪 Testing Email Validation...\n');
    
    const testEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'invalid-email',
        'test@',
        '@domain.com',
        'test@domain',
        'test..test@domain.com',
        'test@domain..com',
        'a@b.c',
        'very.long.email.address.that.exceeds.maximum.length@very.long.domain.name.that.also.exceeds.maximum.length.com'
    ];
    
    testEmails.forEach(email => {
        const isValid = isValidEmail(email);
        console.log(`${isValid ? '✅' : '❌'} ${email} -> ${isValid ? 'Valid' : 'Invalid'}`);
    });
    
    console.log('\n✅ Email validation tests completed!');
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { testEmailValidation };
}

// Run tests if this file is executed directly
if (require.main === module) {
    testEmailValidation();
}
