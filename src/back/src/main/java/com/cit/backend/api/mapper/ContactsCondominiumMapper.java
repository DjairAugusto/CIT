package com.cit.backend.api.mapper;

import com.cit.backend.api.request.ContactsCondominiumRequest;
import com.cit.backend.domain.entity.ContactsCondominium;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ContactsCondominiumMapper {
    @Autowired
    private ModelMapper modelMapper;


    public ContactsCondominium toContactsCondominium(ContactsCondominiumRequest request) {
        return modelMapper.map(request, ContactsCondominium.class);
    }
}
