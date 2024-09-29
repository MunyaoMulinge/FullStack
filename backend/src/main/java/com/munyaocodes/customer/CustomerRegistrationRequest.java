package com.munyaocodes.customer;

public record CustomerRegistrationRequest(
        String name,
        String email,
        Integer age
) {
}
