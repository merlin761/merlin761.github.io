#include <iostream>
#include <map>
#include <string>

class Credentials {
public:
    Credentials(const std::string& password) : password(password) {}

    std::string generateEncryptedPassword() {
        // Implement encryption logic here
        return password; // Placeholder for the actual encrypted password
    }

private:
    std::string password;
};

class Authentication {
public:
    static const std::string USER_VETERINARIAN;
    static const std::string USER_VETERINARIAN1;
    static const std::string USER_ZOOKEEPER;
    static const std::string USER_ZOOKEEPER1;
    static const std::string USER_ADMIN;
    static const std::string USER_ADMIN1;
};

const std::string Authentication::USER_VETERINARIAN = "veterinarian";
const std::string Authentication::USER_VETERINARIAN1 = "veterinarian1";
const std::string Authentication::USER_ZOOKEEPER = "zookeeper";
const std::string Authentication::USER_ZOOKEEPER1 = "zookeeper1";
const std::string Authentication::USER_ADMIN = "admin";
const std::string Authentication::USER_ADMIN1 = "admin1";

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
            if (credentials.find(user) != credentials.end() && credentials.at(user) == cred.generateEncryptedPassword()) {
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
            std::cout << "Hello, Veterinarian!\n\nAs veterinarian, you have access to all of the animals' health records. This allows you to view each animal's medical history and current treatments/illnesses (if any), and to maintain a vaccination log.\n\n";
            isValidUser = true;
        } else if (username == Authentication::USER_ZOOKEEPER || username == Authentication::USER_ZOOKEEPER1) {
            std::cout << "Hello, Zookeeper!\n\nAs zookeeper, you have access to all of the animals' information and their daily monitoring logs. This allows you to track their feeding habits, habitat conditions, and general welfare.\n\n";
            isValidUser = true;
        } else if (username == Authentication::USER_ADMIN || username == Authentication::USER_ADMIN1) {
            std::cout << "Hello, System Admin!\n\nAs administrator, you have access to the zoo's main computer system. This allows you to monitor users in the system and their roles.\n\n";
            isValidUser = true;
        } else {
            std::cout << "Incorrect username and/or password combination. You have exceeded the maximum amount of login attempts. Please try again later.\n";
        }

        return isValidUser;
    }
};

