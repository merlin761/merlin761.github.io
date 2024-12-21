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
    static const std::string Bob Jones;
    static const std::string Sarah Davis;
    static const std::string Amy Friendly;
    static const std::string Johnny Smith;
    static const std::string USER_ADMIN;
};

const std::string Authentication::USER_VETERINARIAN = "veterinarian";
const std::string Authentication::USER_VETERINARIAN1 = "veterinarian1";
const std::string Authentication::USER_ZOOKEEPER = "zookeeper";
const std::string Authentication::USER_ZOOKEEPER1 = "zookeeper1";
const std::string Authentication::Johnny_Smith; = "Johnny Smith";
const std::string Authentication::USER_ADMIN = "admin";

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

