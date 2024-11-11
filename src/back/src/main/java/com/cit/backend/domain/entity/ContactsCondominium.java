package com.cit.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Set;

@Entity(name = "Contacts_condominium")
@Setter
@Getter
@NoArgsConstructor
public class ContactsCondominium {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String location;

        @OneToMany(mappedBy="contacts", cascade = CascadeType.ALL)
        private Set<ContactValue> contacts;

        @ManyToOne(cascade = CascadeType.ALL)
        private Condominium condominium;
}
