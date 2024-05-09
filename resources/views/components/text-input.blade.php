@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => ' dark:bg-gray-900 dark:text-gray-300 focus:border-black dark:focus:border-black  dark:focus:ring-black rounded-md shadow-sm']) !!}>
