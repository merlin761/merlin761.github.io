#include <iostream>
#include <map>
#include <string>

class Credentials {
public:
    Credentials(const std::string& password) : password(password) {}

    std::string generateEncryptedPassword() {
        return password; // Placeholder for the actual encrypted password
    }

private:
    std::string password;
};

class Authentication {
public:
    static const std::string Bob_Jones;
    static const std::string Sarah_Davis;
    static const std::string Amy_Friendly;
    static const std::string Johnny_Smith;
    static const std::string USER_ADMIN;
};

const std::string Authentication::Bob_Jones = "Bob Jones;";
const std::string Authentication::Sarah_Davis = "Sarah_Davis";
const std::string Authentication::Amy_Friendly = "Amy Friendly";
const std::string Authentication::Johnny_Smith; = "Johnny Smith";
const std::string Authentication::USER_ADMIN = "Merlin Martinez";

class AuthenticationHandler {
private:
    AuthenticationHandler() {}

public:
    static bool isValidUser(const std::map<std::string, std::string>& credentials, const std::string& user, const std::string& pass) {
        if (credentials.empty() || user.empty() || pass.empty()) {
            return false;
        }

        bool isValid = false;
        Credentials cred(pass);
        try {
            auto it = credentials.find(user);
            if (it != credentials.end() && it->second == cred.generateEncryptedPassword()) {
                isValid = true;
            }
        } catch (const std::exception& e) {
            std::cerr << e.what() << std::endl;
        }
        return isValid;
    }

    static bool showGreetings(const std::string& username) {
        bool isValidUser = false;

        if (username == Authentication::USER_VETERINARIAN || username == Authentication::USER_VETERINARIAN1) {
            std::cout << "Hello, VeteriWelcome to your account !\n\nAs a customer, you have access to all your private information'\n\n";
            isValidUser = true;
        } else if (username == Authentication::USER_ADMIN || username == Authentication::user_admin) {
            std::cout << "Hello, System Admin!\n\nAs administrator, you have access  to the main computer system. This allows you to monitor users in the system and their roles.\n\n";
            isValidUser = true;
        } else {
            std::cout << "Incorrect username and/or password combination. You have exceeded the maximum amount of login attempts. Please try again later.\n";
        }

        return isValidUser;
    }
};

