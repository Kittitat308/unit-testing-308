// IndexPage.spec.js
import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบตัวแปร firstName', () => {
    const wrapper = shallowMount(IndexPage)
    const firstNameInput = wrapper.find('#firstName')
    expect(firstNameInput.element.value).toBe('กิตติทัศน์')
  }),

  it('ตรวจสอบตัวแปร lastname', () => {
    const wrapper = shallowMount(IndexPage)
    const lastNameInput = wrapper.find('#lastName')
    expect(lastNameInput.element.value).toBe('วิริยา')
  }),

  it('ตรวจสอบตัวแปร studentCode', () => {
    const wrapper = shallowMount(IndexPage)
    const studentCodeInput = wrapper.find('#studentCode')
    expect(studentCodeInput.element.value).toBe('6604101308')
  }),

  it('ตรวจสอบตัวแปร nickName', () => {
    const wrapper = shallowMount(IndexPage)
    const nickNameInput = wrapper.find('#nickName')
    expect(nickNameInput.element.value).toBe('มาร์ค')
  })
});

