package com.cit.backend.api.mapper;

import com.cit.backend.api.request.ContactCondominiumRequest;
import com.cit.backend.api.request.ContactsCondominiumRequest;
import com.cit.backend.api.response.ContactsCondominiumResponse;
import com.cit.backend.domain.entity.ContactsCondominium;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class ContactsCondominiumMapper {
    @Autowired
    private ModelMapper modelMapper;

    public ContactsCondominiumResponse toContactsCondominiumResponse(ContactsCondominium contactsCondominium) {
        return modelMapper.map(contactsCondominium, ContactsCondominiumResponse.class);
    }

    public ContactsCondominium toContactsCondominium(ContactsCondominiumRequest contactsCondominiumRequest) {
        contactsCondominiumRequest.setContacts(Arrays.stream(contactsCondominiumRequest.getContacts())
                .peek(contact -> contact.setType(contact.getType().toUpperCase()))
                .toArray(ContactCondominiumRequest[]::new));
        return modelMapper.map(contactsCondominiumRequest, ContactsCondominium.class);
    }

    public ContactsCondominiumRequest toContactsCondominiumRequest(ContactsCondominium contactsCondominium) {
        return modelMapper.map(contactsCondominium, ContactsCondominiumRequest.class);
    }
}
