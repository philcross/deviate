<?php

namespace App\ValueObjects;

class PersonName
{
    /** @var string */
    private $forename;

    /** @var string */
    private $surname;

    /**
     * Constructor
     *
     * @param string $forename
     * @param string $surname
     */
    public function __construct($forename, $surname)
    {
        $this->forename = $forename;
        $this->surname  = $surname;
    }

    /**
     * Return the users forename
     *
     * @return string
     */
    public function forename()
    {
        return $this->forename;
    }

    /**
     * Return the users surname
     *
     * @return string
     */
    public function surname()
    {
        return $this->surname;
    }

    /**
     * Convert the object to a string
     *
     * @return string
     */
    public function __toString()
    {
        return sprintf('%s %s', $this->forename(), $this->surname());
    }
}
